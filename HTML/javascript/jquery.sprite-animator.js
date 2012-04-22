/*!
 * jQuery spriteAnimator (revision 2012/04/22)
 * http://fili.nl
 * 
 * Copyright (c) Fili Wiese, ONI
 * Licensed under LGPL 2.1 - http://www.gnu.org/licenses/lgpl-2.1.html
 */

(function($) {
    $.spriteAnimator = function(element, options, callback) {
        
        var plugin = this;
        
        var defaults = {
            play: true,
            url: null,
            delay: 50,
            run: 0,
            reversed: false,
            cols: null,
            rows: null,
            top: null,
            bottom: null,
            left: null,
            right: null,
            script: []
        };
        
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
            outOfViewStop: false,
            cutOffFrames: 0
        };
        
        plugin.settings = {};

        var $element = $(element);
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.globals = globals;
            
            if (options.cols === undefined) { $.error( 'spriteAnimator: cols not set' ); }
            if (options.rows === undefined) { $.error( 'spriteAnimator: rows not set' ); }
            
            plugin.load();
        };
        
        plugin.destroy = function() {
            $element.removeData('spriteAnimator');
            $element = null;
        };
        
        plugin.load = function() {
            var _preload = new Image();
            _preload.src = plugin.settings.url;
            
            _isLoaded(_preload, function(){
                // Fix for some unexplained firefox bug that loads this twice.
                if (plugin.globals.loaded) { return; }

                plugin.globals.loaded = true;
                plugin.globals.sheetWidth = _preload.width;
                plugin.globals.sheetHeight = _preload.height;
                
                plugin.globals.frameWidth = parseInt(plugin.globals.sheetWidth / plugin.settings.cols, 10);
                plugin.globals.frameHeight = parseInt(plugin.globals.sheetHeight / plugin.settings.rows, 10);
                plugin.globals.sheetCols = plugin.settings.cols;
                plugin.globals.sheetRows = plugin.settings.rows;
                if (plugin.globals.frameWidth % 1 > 0) {
                    $.error( 'spriteAnimator: frameWidth ' + plugin.globals.frameWidth + ' is not a whole number' );
                }
                if (plugin.globals.frameHeight % 1 > 0) {
                    $.error( 'spriteAnimator: frameHeight ' + plugin.globals.frameHeight + ' is not a whole number' );
                }
                
                if (plugin.settings.script.length === 0) {
                    for (i=0; i < (plugin.globals.sheetCols * plugin.globals.sheetRows); i++) {
                        plugin.settings.script[i] = {frame: (i + 1)};
                    }
                    if (plugin.settings.cutOffFrames > 0) {
                        for (c = 0; c < plugin.settings.cutOffFrames ; c++) {
                            plugin.settings.script.pop();
                        }
                    }
                }
                
                if (plugin.settings.reversed) {
                    plugin.settings.script.reverse();
                }
                
                $element.css({
                    position: 'absolute',
                    width: plugin.globals.frameWidth,
                    height: plugin.globals.frameHeight,
                    backgroundImage: 'url('+plugin.settings.url+')'
                });
                
                if (plugin.settings.top !== null) {
                    if (plugin.settings.top == 'center') {
                        $element.css({top: '50%', marginTop: plugin.globals.frameHeight / 2 * -1});
                    } else {
                        $element.css({top: plugin.settings.top});
                    }
                }
                if (plugin.settings.right !== null) {
                    $element.css({right: plugin.settings.right});
                }
                if (plugin.settings.bottom !== null) {
                    $element.css({bottom: plugin.settings.bottom});
                }
                if (plugin.settings.left !== null) {
                    if (plugin.settings.left == 'center') {
                        $element.css({left: '50%', marginLeft: plugin.globals.frameWidth / 2 * -1});
                    } else {
                        $element.css({left: plugin.settings.left});
                    }
                }

                // Bind stop event
                $element.off('stop').on('stop', function(){
                    plugin.stop();
                });
                
                //console.log('Loaded: ' + plugin.settings.url + ', sprites ' + plugin.globals.sheetCols + ' x ' + plugin.globals.sheetRows);

                // Pause?
                if (plugin.settings.run == 0) {
                    plugin.settings.play = false;
                }
                plugin.loop();
            });
        };
        
        plugin.loop = function() {
            
            // Should be called as soon as possible
            requestAnimationFrame( plugin.loop );

            // Element loaded and has script?
            if ($element !== null && plugin.globals.loaded && plugin.settings.script.length > 0) {
                
                // Throttle on nextDelay
                time = new Date();
                if ((time - plugin.globals.lastTime) >= plugin.globals.nextDelay) {
                    
                    // Render next frame only if element is visible and within viewport
                    if (plugin.settings.play) {
                        plugin.nextFrame();
                    }
                }
                
            }
        };

        plugin.nextFrame = function() {
             if ($element.filter(':visible') && _inViewport($element)) {
                var frame = plugin.settings.script[plugin.globals.frameIterator];
                var delay = (frame.delay != undefined ? frame.delay : plugin.settings.delay);
                
                //console.log('[' + plugin.globals.frameIterator + '] frame: ' + frame.frame + ', delay: ' + delay);
                _next(frame);
                
                plugin.globals.lastTime = time;
                plugin.globals.nextDelay = delay;
            } else {
                if (plugin.settings.outOfViewStop) {
                    plugin.stop();
                }
            }
        };

        plugin.pause = function() {
            plugin.settings.play = false;
        };

        plugin.play = function() {
            plugin.settings.play = true;
        };
        
        plugin.stop = function() {
            plugin.settings.play = false;
            if (typeof callback != 'undefined') {
                callback.call();
            }
        };
        
        var _next = function( frame ) {
            var row = Math.ceil(frame.frame / plugin.globals.sheetCols);
            var col = frame.frame - ((row - 1) * plugin.globals.sheetCols);
            var bgX = ((col - 1) * plugin.globals.frameWidth) * -1;
            var bgY = ((row - 1) * plugin.globals.frameHeight) * -1;
            
            if (row > plugin.globals.sheetRows || col > plugin.globals.sheetCols) {
                $.error( 'spriteAnimator: position ' + frame.frame + ' out of bound' );
            }
            
            // Animate background
            $element.css('background-position', bgX + 'px ' + bgY + 'px');
            
            // Move if indicated
            if (frame.top != undefined) { $element.css('top', ($element.position().top + frame.top) + 'px'); }
            if (frame.bottom != undefined) { $element.css('bottom', ($element.position().bottom + frame.bottom) + 'px'); }
            if (frame.left != undefined) { $element.css('left', ($element.position().left + frame.left) + 'px'); }
            if (frame.right != undefined) { $element.css('right', ($element.position().right + frame.right) + 'px'); }
            
            // Update counter
            plugin.globals.frameIterator += 1;
            if (plugin.globals.frameIterator >= plugin.settings.script.length) {
                plugin.globals.frameIterator = 0;
                plugin.settings.run -= 1;
                if (plugin.settings.run === 0) {
                    plugin.stop();
                }
            }
        };
        
        // Based on Paul Irish imagesLoaded plugin
        var _isLoaded = function (element, _callback ) {
            var elems = $(element).filter('img'),
            len   = elems.length,
            blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            
            elems.on('load.imgloaded', function(){
                if (--len <= 0 && this.src !== blank){ 
                    elems.off('load.imgloaded');
                    _callback.call(elems,this); 
                }
            }).each(function(){
                // cached images don't fire load sometimes, so we reset src.
                if (this.complete || this.complete === undefined){
                    var src = this.src;
                    // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
                    // data uri bypasses webkit log warning (thx doug jones)
                    this.src = blank;
                    this.src = src;
                }  
            });
            
            return this;
        };

        // Test to see if element is within the viewport
        var _inViewport = function(element) {
            var _aboveTop =  ($(window).scrollTop() >= $element.offset().top + plugin.globals.frameHeight);
            var _belowFold = ($(window).height() + $(window).scrollTop() <= $element.offset().top);
            var _leftOfScreen = ($(window).scrollLeft() >= $element.offset().left + plugin.globals.frameWidth);
            var _rightOfScreen = ($(window).width() + $(window).scrollLeft() <= $element.offset().left);
            return (!_aboveTop && !_belowFold && !_leftOfScreen && !_rightOfScreen);
        }
        
        plugin.init();

    };

    // Boilerplate: http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/
    $.fn.spriteAnimator = function(options, callback) {
        
        return this.each(function() {
            if (undefined != $(this).data('spriteAnimator')) {
                $(this).data('spriteAnimator').destroy();
            }
            
            var plugin = new $.spriteAnimator(this, options, callback);
            
            $(this).data('spriteAnimator', plugin);
        });
    };
    
})(jQuery);


/**
 * Polyfill: requestAnimationFrame by Paul Irish and Erik Möller
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 */
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = 
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
