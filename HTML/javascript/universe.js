var universe = {
    constant: {
        debug: false,
        answer: 42,
        viewportWidth: 0,
        viewportHeight: 0,
        transformSupport: false,
        useTransforms: true,
        useTranslate3d: false,
        stopwatch: [],
        ipad: (navigator.userAgent.indexOf('iPad') != -1),
        touch: (!!('ontouchstart' in window)),
        smallScreen: false
    },

    context: {},

    init: function () {
        universe.log('*BANG*');
        universe.log('Init: universe');

        // Detect transform support
        if (universe.constant.useTransforms) {
            var thisBody = document.body || document.documentElement;
            var thisStyle = thisBody.style;
            universe.constant.transformSupport = thisStyle.transform !== undefined || thisStyle.WebkitTransform !== undefined || thisStyle.MozTransform !== undefined || thisStyle.OTransform !== undefined;
            if (universe.constant.transformSupport) {
                universe.log('Detected CSS3 transformation support');
            }
            if (universe.constant.ipad) {
                universe.constant.useTranslate3d = true;
            }
        }

        // Detect Small Screens
        universe.constant.smallScreen = ($(window).width() < 621);

        var _cosmos = '<section id="cosmos"><div id="space-dust"></div><div id="galaxy"></div>' +
            '<div id="nebula"><canvas></canvas><div></div></div><div id="stars"></div>' +
            '<div id="planet"></div><div id="space-debris"></div></section>';

        if ($.browser.msie) {
            if ($.browser.version == '6.0') {
                $('body').addClass('no-js');
            }
        }
        $('body').append(_cosmos);

        universe.context = {
            body: $('#universe'),
            content: $('#content'),
            overlay: $('#overlay'),
            languageSelector: $('#language-selector'),
            themeSelector: $('#theme-selector'),
            cosmos: $('#cosmos'),
            nebula: $('#nebula'),
            galaxy: $('#galaxy'),
            stars: $('#stars'),
            planet: $('#planet'),
            spaceDebris: $('#space-debris')
        };

        if (!universe.constant.smallScreen) {
            universe.registerKeystrokes();
            universe.loadTheme();
            universe.parallax();
        }
        overlay.init();
    },

    letThereBelight: function () {
        universe.log('And then there was light');
        universe.context.cosmos.fadeTo(3000, 1);

        // Scale in
        var from = {scale: 0.85};
        var to = {scale: 1};
        $(from).animate(to, {
            duration: 3000,
            easing: 'swing',
            queue: false,
            step: function (step) {
                planetScale = step;
                $(window).trigger('resize');
            }
        });
    },

    parallax: function () {
        universe.log('Universe: parallax');

        var throttle = 0;
        var prevX = prevY = 50;
        var maxParallaxX = maxParallaxY = 110;

        var resize = function (event) {
            universe.constant.viewportWidth = $(window).width();
            universe.constant.viewportHeight = $(window).height();
            var offsetHeight = universe.context.cosmos.height();

            planetTop = parseInt((offsetHeight * 0.40) - (universe.context.planet.height() / 2), 10);
            planetLeft = parseInt((universe.constant.viewportWidth * 0.54) - (universe.context.planet.width() / 2), 10);
            planetScale = (typeof planetScale != 'undefined' ? planetScale : 1);
            starsTop = parseInt((offsetHeight / 2) - (universe.context.stars.height() / 2), 10);
            starsLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.stars.width() / 2), 10);
            nebulaTop = parseInt((offsetHeight / 2) - (universe.context.nebula.height() / 2), 10);
            nebulaLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.nebula.width() / 2), 10);
            galaxyTop = parseInt((offsetHeight / 2) - (universe.context.galaxy.height() / 2), 10);
            galaxyLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.galaxy.width() / 2), 10);

            update();
        };

        var update = function (axisX, axisY) {
            if (axisX === undefined || axisY === undefined) {
                axisX = prevX;
                axisY = prevY;
            }
            var offsetX = parseInt(((maxParallaxX / 100) * axisX) - (maxParallaxX / 2), 10);
            var offsetY = parseInt(((maxParallaxY / 100) * axisY) - (maxParallaxY / 2), 10);
            prevX = axisX;
            prevY = axisY;

            // parallax effect
            universe.transform({
                top: (galaxyTop - (offsetY / 4)) + 'px',
                left: (galaxyLeft - (offsetX / 4)) + 'px'
            }, universe.context.galaxy);

            universe.transform({
                top: (nebulaTop - (offsetY / 4)) + 'px',
                left: (nebulaLeft - (offsetX / 4)) + 'px'
            }, universe.context.nebula);

            universe.transform({
                top: (starsTop - (offsetY / 3)) + 'px',
                left: (starsLeft - (offsetX / 3)) + 'px'
            }, universe.context.stars);

            universe.transform({
                top: (planetTop - (offsetY / 2)) + 'px',
                left: (planetLeft - (offsetX / 2)) + 'px',
                scale: planetScale
            }, universe.context.planet);
        };

        // Viewport resize event
        $(window).on('resize', function (event) {
            var newThrottle = new Date().getTime();
            if (newThrottle - throttle < 10) {
                return;
            }
            throttle = newThrottle;
            resize();
        });

        // Touch device
        if (universe.constant.touch) {
            maxParallaxX = maxParallaxX * 5;
            maxParallaxY = maxParallaxY * 5;

            // Scale on iPad pinch gesture
            /*
             //document.getElementById('cosmos')
             $('#cosmos').on('gesturechange', function(event) {
             event.preventDefault();
             planetScale = event.scale;
             update();

             //$(document).on('gesturechange', function(event) {
             //});

             $(this).on('gestureend', function(event) {
             var from = { scale: planetScale };
             var to = { scale: 1 };
             $(from).animate(to, {
             duration: 500,
             easing: 'easeOutBack',
             queue: false,
             step: function(step) {
             planetScale = step;
             update();
             }
             });
             });

             return false;
             });*/

            // Animate to finger position on touchstart
            document.getElementById('cosmos').ontouchstart = function (event) {
                var _axisX = ((event.touches[0].pageX - universe.constant.viewportWidth) / (0 - universe.constant.viewportWidth)) * 100;
                var _axisY = ((event.touches[0].pageY - universe.context.cosmos.height()) / (universe.context.overlay.height() - universe.context.cosmos.height())) * 100;

                // Animate to finger position on touchstart
                var from = {
                    axisX: prevX,
                    axisY: prevY
                };
                var to = {
                    axisX: _axisX,
                    axisY: _axisY
                };
                $(from).animate(to, {
                    duration: 150,
                    queue: true,
                    easing: 'linear',
                    step: function () {
                        update(this.axisX, this.axisY);
                    }
                });
            };

            // Follow finger position on touchmove
            document.getElementById('cosmos').ontouchmove = function (event) {
                var _axisX = ((event.touches[0].pageX - universe.constant.viewportWidth) / (0 - universe.constant.viewportWidth)) * 100;
                var _axisY = ((event.touches[0].pageY - universe.context.cosmos.height()) / (universe.context.overlay.height() - universe.context.cosmos.height())) * 100;
                update(_axisX, _axisY);

                event.preventDefault();
                return false;
            };

            // Center on touchend
            document.getElementById('cosmos').ontouchend = function (event) {
                var from = {
                    axisX: prevX,
                    axisY: prevY
                };
                var to = {
                    axisX: 50,
                    axisY: 50
                };
                $(from).animate(to, {
                    duration: 500,
                    easing: 'easeOutBack',
                    queue: false,
                    step: function () {
                        update(this.axisX, this.axisY);
                    }
                });
                event.preventDefault();
                return false;
            };

        } else {
            $(document).on('mousemove', function (event) {
                var _axisX = (event.pageX / universe.constant.viewportWidth) * 100;
                var _axisY = (event.pageY / universe.constant.viewportHeight) * 100;
                update(_axisX, _axisY);
            });
        }

        // Set stage for the first time
        resize();
    },

    loadTheme: function (themeToLoad) {
        if (typeof theme !== 'undefined') {
            if (themeToLoad == theme.name) {
                return;
            }
        } else {
            // Select theme by the current time
            var time = new Date();
            $('a', universe.context.themeSelector).each(function () {
                var _startTime = $(this).data('start-time').split(':');
                var _compare = new Date();
                _compare.setHours(_startTime[0]);
                _compare.setMinutes(_startTime[1]);
                if (time > _compare) {
                    themeToLoad = $(this).data('theme');
                }
            });
            nebula.init();
            planet.init();
        }

        $.getScript('/min/?f=javascript/' + themeToLoad + '.js&' + new Date().getTime(), function () {
            universe.context.body.data('theme', themeToLoad);
            universe.log('Loaded theme: ' + themeToLoad);
            universe.preloadSprites();
            planet.loadTheme();
            nebula.loadTheme();
            overlay.loadTheme();
            universe.createSprites();
            if (!universe.context.cosmos.is(':visible')) {
                setTimeout(universe.letThereBelight, 1000);
            }
        });
    },

    preloadSprites: function () {
        var sources = [];
        var o = 0;
        for (var i in theme.animations) {
            if (universe.inArray(theme.animations[i].url, sources) === true) {
                continue;
            }
            sources[o] = theme.animations[i].url;
            o++;
        }
        universe.log('Preloading: ' + sources);

        // Make it global to prevent garbage collection
        images = [];
        for (i = 0; i < sources.length; i++) {
            images[i] = new Image();
            images[i].src = sources[i];
        }
    },

    createSprites: function () {
        // generate sprite placeholders
        $('div.sprite').remove();
        for (var _context in theme.sprites) {
            for (var _id in theme.sprites[_context]) {
                $('#' + _context).append('<div id="' + _id + '" class="sprite"></div>');
            }
        }
        if (universe.constant.debug) {
            $('div.sprite').css({border: '1px solid orange'});
        }

        // attach sprite animator
        $('div.sprite').each(function () {
            $(this).data('function', function (_sprite, _spriteScript, _iteration) {
                if (_iteration > _spriteScript.length - 1) {
                    _iteration = 0;
                }
                var _animation = _spriteScript[_iteration];
                if (_animation.substr(0, 8) === 'trigger:') {
                    var _trigger = _animation.split(':');
                    universe.log('Trigger ' + _trigger[1] + ':' + _trigger[2]);
                    $('div#' + _trigger[1]).triggerHandler(_trigger[2]);
                    var _function = _sprite.data('function');
                    if (typeof _function != 'undefined') {
                        _function(_sprite, _spriteScript, _iteration + 1);
                    }
                } else {
                    //var debug = (_sprite.attr('id') == 'sprite-ossy' ? true : false);
                    var _animationObject = theme.animations[_animation];
                    _sprite.spriteAnimator({
                        debug: false,
                        url: _animationObject.url,
                        cols: _animationObject.cols,
                        rows: _animationObject.rows,
                        bottom: _animationObject.bottom,
                        left: _animationObject.left,
                        top: _animationObject.top,
                        right: _animationObject.right,
                        cutOffFrames: _animationObject.cutOffFrames,
                        startSprite: _animationObject.startSprite
                    }).play({
                        run: _animationObject.run,
                        delay: _animationObject.delay,
                        script: _animationObject.script,
                        reversed: _animationObject.reversed,
                        onStop: function () {
                            var _function = _sprite.data('function');
                            if (typeof _function != 'undefined') {
                                _function(_sprite, _spriteScript, _iteration + 1);
                            }
                        }
                    });
                }
            }).data('function')($(this), theme.sprites[$(this).parent().attr('id')][$(this).attr('id')], 0);
        });
    },

    transform: function (css, context) {
        if (typeof css == 'object' && universe.constant.transformSupport && universe.constant.useTransforms) {

            var transform = [];
            if (css.left != undefined && css.top != undefined) {
                x = css.left;
                y = css.top;
                if (universe.constant.useTranslate3d) {
                    transform.push('translate3d(' + parseInt(x, 10) + 'px,' + parseInt(y, 10) + 'px, 0)');
                } else {
                    transform.push('translate(' + parseInt(x, 10) + 'px,' + parseInt(y, 10) + 'px)');
                }
                css.left = css.top = '';
            }

            if (css.scale) {
                transform.push('scale(' + css.scale + ')');
                css.scale = '';
            }

            if (transform.length) {
                css['transform'] = transform.join(' ');
                css['transform-origin'] = '50% 50%';
                css['transform-duration'] = '0';
            }

        }
        context.css(css);
    },

    registerKeystrokes: function () {
        universe.log('Universe: registering keystrokes');

        //var konamiKeys = [];
        //konamiCode = "38,38,40,40,37,39,37,39,66,65";
        //konamiCode = "38,38,40,40";

        $(document).keyup(function (event) {
            switch (event.keyCode) {
                case 27: // Esc
                    if (universe.context.overlay.hasClass('is-open')) {
                        $('#unfold a', universe.context.overlay).trigger('click');
                    }
                    break;

                case 78: // n
                    nebula.toggleColorPicker();
                    break;

                /*default: // konami
                 konamiKeys.push( event.keyCode );
                 while (konamiKeys.length > konamiCode.split(',').length) {
                 konamiKeys.shift();
                 }
                 if ( konamiKeys.toString().indexOf( konamiCode ) >= 0 ){
                 universe.loadTheme('theme-konami');
                 }
                 universe.log('Key pressed: ' + event.keyCode);
                 break;*/
            }
        });
    },

    entropy: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    debug: function (message) {
        if (universe.constant.debug) {
            if ($('#debug').size() < 1) {
                $('body').append('<div id="debug"></div>');
            }
            $('#debug').html(message);
        }
    },

    log: function (message) {
        if (typeof console != 'undefined' && universe.constant.debug) {
            console.log(message);
        }
    },

    inArray: function (needle, array1) {
        for (j = 0; j < array1.length; j++) {
            if (array1[j] == needle) {
                return true;
            }
        }
        return false;
    },

    stopwatch: function (name, start) {
        var _timer = new Date().getTime();
        if (start === true) {
            universe.constant.stopwatch[name] = _timer;
        } else {
            universe.log('Stopwatch: ' + name + ' took ' + (_timer - universe.constant.stopwatch[name]) + ' ms');
            universe.constant.stopwatch[name] = _timer;
        }
    }
};

if (typeof window.jQuery != 'undefined') {
    $(document).ready(function () {
        universe.init();
    });
}

