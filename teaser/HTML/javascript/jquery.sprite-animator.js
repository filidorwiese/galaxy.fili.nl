// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos
// http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/

(function ($) {
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    $.spriteAnimator = function (element, options, callback) {

        var plugin = this;

        var defaults = {
            play: true,
            url: null,
            delay: 50,
            run: 0,
            cols: null,
            rows: null,
            bottom: null,
            left: 0,
            script: []
        }

        var globals = {
            loaded: false,
            sheetWidth: 0,
            sheetHeight: 0,
            sheetCols: 0,
            sheetRows: 0,
            frameWidth: 0,
            frameHeight: 0,
            frameIterator: 0,
            lastTime: 0,
            nextDelay: 0,
            onComplete: function () {
            }
        }

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('pluginName').settings.propertyName from outside the plugin, where "element" is the
        // element the plugin is attached to;
        plugin.settings = {}

        var $element = $(element),
            element = element;

        // constructor
        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            plugin.globals = globals;
            if (callback) plugin.globals.onComplete = callback;

            if (options.cols == undefined) $.error('spriteAnimator: cols not set');
            if (options.rows == undefined) $.error('spriteAnimator: rows not set');

            plugin.load();
        }

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // element.data('pluginName').publicMethod(arg1, arg2, ... argn) from outside the plugin, where "element"
        // is the element the plugin is attached to;
        plugin.load = function () {
            var _preload = new Image();
            _preload.src = plugin.settings.url;

            _isLoaded(_preload, function () {
                plugin.globals.loaded = true;
                plugin.globals.sheetWidth = _preload.width;
                plugin.globals.sheetHeight = _preload.height;

                plugin.globals.frameWidth = plugin.globals.sheetWidth / plugin.settings.cols;
                plugin.globals.frameHeight = plugin.globals.sheetHeight / plugin.settings.rows;
                plugin.globals.sheetCols = plugin.settings.cols;
                plugin.globals.sheetRows = plugin.settings.rows;
                if (plugin.globals.frameWidth % 1 > 0) $.error('spriteAnimator: frameWidth ' + plugin.globals.frameWidth + ' is not a whole number');
                if (plugin.globals.frameHeight % 1 > 0) $.error('spriteAnimator: frameHeight ' + plugin.globals.frameHeight + ' is not a whole number');
                //plugin.globals.sheetCols = plugin.globals.sheetWidth / plugin.settings.frameWidth;
                //plugin.globals.sheetRows = plugin.globals.sheetHeight / plugin.settings.frameHeight;
                //if (plugin.globals.sheetCols % 1 > 0) $.error( 'spriteAnimator: cols are incorrect' );
                //if (plugin.globals.sheetRows % 1 > 0) $.error( 'spriteAnimator: rows are incorrect' );

                if (plugin.settings.script.length == 0) {
                    for (i = 0; i < (plugin.globals.sheetCols * plugin.globals.sheetRows); i++) {
                        plugin.settings.script[i] = {frame: (i + 1)};
                    }
                }

                $element.css({
                    position: 'absolute',
                    width: plugin.globals.frameWidth,
                    height: plugin.globals.frameHeight,
                    backgroundImage: 'url(' + plugin.settings.url + ')'
                });

                if (plugin.settings.bottom != null) $element.css({bottom: plugin.settings.bottom});
                if (plugin.settings.left != null) $element.css({left: plugin.settings.left});

                plugin.play();
            });
        }

        plugin.play = function () {
            if (plugin.settings.play) {
                if (plugin.globals.loaded && plugin.settings.script.length > 0) {
                    time = new Date();
                    if ((time - plugin.globals.lastTime) >= plugin.globals.nextDelay) {
                        var frame = plugin.settings.script[plugin.globals.frameIterator];
                        var delay = (frame.delay != undefined ? frame.delay : plugin.settings.delay);

                        //universe.trace('[' + plugin.globals.frameIterator + '] frame: ' + frame.frame + ', delay: ' + delay);
                        _next(frame);

                        plugin.globals.lastTime = time;
                        plugin.globals.nextDelay = delay;
                    }
                }

                requestAnimFrame(plugin.play);
            } else {
                plugin.globals.onComplete();
            }

        }

        plugin.stop = function () {
            plugin.settings.play = false;
        }

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)
        var _next = function (frame) {
            var row = Math.ceil(frame.frame / plugin.globals.sheetCols);
            var col = frame.frame - ((row - 1) * plugin.globals.sheetCols);
            var bgX = ((col - 1) * plugin.globals.frameWidth) * -1;
            var bgY = ((row - 1) * plugin.globals.frameHeight) * -1;
            //universe.trace('row = ' + row + ', col = ' + col + ', bgX = ' + bgX + 'px, bgY = ' + bgY + 'px');

            if (row > plugin.globals.sheetRows || col > plugin.globals.sheetCols) {
                $.error('spriteAnimator: position ' + frame.frame + ' out of bound');
            }

            $element.css('background-position', bgX + 'px ' + bgY + 'px');

            plugin.globals.frameIterator += 1;
            if (plugin.globals.frameIterator >= plugin.settings.script.length) {
                plugin.globals.frameIterator = 0;
                plugin.settings.run -= 1;
                if (plugin.settings.run == 0) {
                    plugin.settings.play = false;
                }
            }
        }

        // Based on paul irish imagesLoaded plugin
        var _isLoaded = function (element, callback) {
            $(element).bind('load', function () {
                callback.call(element, this);
            }).each(function () {
                // cached images don't fire load sometimes, so we reset src.
                if (this.complete || this.complete === undefined) {
                    var src = this.src;
                    // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
                    // data uri bypasses webkit log warning (thx doug jones)
                    this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                    this.src = src;
                }
            });
            return this;
        }

        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.spriteAnimator = function (options, callback) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function () {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('pluginName')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.spriteAnimator(this, options, callback);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('spriteAnimator', plugin);

            }

        });

    }

})(jQuery);
