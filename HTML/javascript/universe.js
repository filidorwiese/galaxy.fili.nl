
// http://jdbartlett.github.com/innershiv | WTFPL License
window.innerShiv=(function(){var d,r;return function(h,u){if(!d){d=document.createElement('div');r=document.createDocumentFragment();/*@cc_on d.style.display = 'none'@*/}var e=d.cloneNode(true);/*@cc_on document.body.appendChild(e);@*/e.innerHTML=h.replace(/^\s\s*/, '').replace(/\s\s*$/, '');/*@cc_on document.body.removeChild(e);@*/if(u===false)return e.childNodes;var f=r.cloneNode(true),i=e.childNodes.length;while(i--)f.appendChild(e.firstChild);return f}}());

var universe = {
	constant: {
		debug: true,
		answer: 42,
		viewportWidth: 0,
		viewportHeight: 0,
		transformSupport: false,
		useTransforms: true,
		useTranslate3d: false,
		stopwatch: [],
		ios: (navigator.userAgent.indexOf('iPhone')!=-1)||(navigator.userAgent.indexOf('iPod')!=-1)||(navigator.userAgent.indexOf('iPad')!=-1),
		iphone: (navigator.userAgent.indexOf('iPhone')!=-1)||(navigator.userAgent.indexOf('iPod')!=-1),
		ipad: (navigator.userAgent.indexOf('iPad')!=-1),
		android: (navigator.userAgent.indexOf('Android')!=-1)
	},
	
	context: {},
	
	init: function() {
		universe.log('*BANG*');
		universe.log('Init: universe');
		
		// Detect transform support
		if (universe.constant.useTransforms) {
			thisBody = document.body || document.documentElement, thisStyle = thisBody.style;
			universe.constant.transformSupport = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
			if (universe.constant.transformSupport) { universe.log('Detected CSS3 transformation support'); }
			if (universe.constant.ipad) { universe.constant.useTranslate3d = true; }
		}
		
		var _cosmos = '<section id="cosmos"><div id="space-dust"></div><div id="galaxy"></div>' +
					  '<div id="nebula"><canvas></canvas><div></div></div><div id="stars"></div>' +
					  '<div id="planet"></div><div id="space-debris"></div></section>';
		
		if ($.browser.msie) {
			if ($.browser.version == '6.0') { $('body').addClass('no-js') }
			_cosmos = innerShiv(_cosmos);
		}
		$('body').append(_cosmos);
		
		universe.context = {
			body: $('#universe'),
			content: $('#content'),
			overlay: $('#overlay'),
			themeSelector: $('#theme-selector'),
			cosmos: $('#cosmos'),
			nebula: $('#nebula'),
			galaxy: $('#galaxy'),
			stars: $('#stars'),
			planet: $('#planet'),
			spaceDebris: $('#space-debris')
		};
		
		universe.registerKeystrokes();
		universe.loadTheme();
		universe.parallax();
		overlay.init();
	},
	
	loadTheme: function(themeToLoad) {
		if (universe.constant.iphone || universe.constant.android) { return; }
		
		if (typeof theme !== 'undefined') {
			if (themeToLoad == theme.name) { return; }
		} else {
			// Select theme by the current time
			var time = new Date();
			$('a', universe.context.themeSelector).each(function(){
				var _startTime = $(this).data('start-time').split(':');
				var _compare = new Date();
				_compare.setHours(_startTime[0]);
				_compare.setMinutes(_startTime[1]);
				if (time > _compare) {
					themeToLoad = $(this).attr('class');
				}
			});
			nebula.init();
			planet.init();
		}
		$.getScript('/min/?f=javascript/' + themeToLoad + '.js&' + new Date().getTime(), function() {
			universe.context.body.data('theme', themeToLoad);
			universe.log('Loaded theme: ' + themeToLoad);
			planet.loadTheme();
			nebula.loadTheme();
			overlay.loadTheme();
			if (!universe.context.cosmos.is(':visible')) { setTimeout(universe.letThereBelight, 1500); }
		});
	},
	
	letThereBelight: function() {
		universe.log('And then there was light');
		universe.context.cosmos.fadeTo(3000, 1);
		
		var _startScale = 85;
		var _onePercent = ((100 - _startScale) / 100);
		universe.context.planet.animate({
			step: 100
		}, {
			easing: 'swing',
			duration: 3000,
			step: function(step) {
				scale = (_startScale + (_onePercent * step)) / 100;
				universe.context.planet.data('scale', scale);
				$(window).trigger('resize');
			}
		});
	},
	
	parallax: function() {
		if (universe.constant.iphone || universe.constant.android) { return; }
		
		universe.log('Universe: parallax');
		
		var throttle = 0;
		var	offsetXprev = offsetYprev = 0;
		var Xprev = Yprev = 50;
		var maxParallaxX = maxParallaxY = 110;
		
		var resize = function(event) {
			universe.constant.viewportWidth = $(window).width();
			universe.constant.viewportHeight = $(window).height();
			var offsetHeight = universe.constant.viewportHeight - (universe.context.cosmos.offset().top / 2);
			
			planetTop = parseInt(((offsetHeight / 100)*45) - (universe.context.planet.height() / 2), 10);
			planetLeft = parseInt(((universe.constant.viewportWidth / 100)*50) - (universe.context.planet.width() / 2), 10);
			starsTop = parseInt((offsetHeight / 2) - (universe.context.stars.height() / 2), 10);
			starsLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.stars.width() / 2), 10);
			nebulaTop = parseInt((offsetHeight / 2) - (universe.context.nebula.height() / 2), 10);
			nebulaLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.nebula.width() / 2), 10);
			galaxyTop = parseInt((offsetHeight / 2) - (universe.context.galaxy.height() / 2), 10);
			galaxyLeft = parseInt((universe.constant.viewportWidth / 2) - (universe.context.galaxy.width() / 2), 10);
			
			update();
		};
		
		var update = function(xAxis, yAxis) {
			if (xAxis == undefined || yAxis == undefined) { xAxis = Xprev; yAxis = Yprev; offsetXprev = offsetYprev = 0;}
			var offsetX = (maxParallaxX / 100) * xAxis * -1;
			var offsetY = (maxParallaxY / 100) * yAxis * -1;
			if (offsetX == offsetXprev && offsetY == offsetYprev) { return false; }
			
			offsetXprev = offsetX;
			offsetYprev = offsetY;
			Xprev = xAxis;
			Yprev = yAxis;
			
			// debug
			universe.debug('xAxis: ' + xAxis + '<br />yAxis: ' + yAxis);
			
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
				scale: universe.context.planet.data('scale')
			}, universe.context.planet);
		};
		
		// Bind events
		$(window).resize(function(event) {
			var newThrottle = new Date().getTime();
			if (newThrottle - throttle < 10) { return; }
			throttle = newThrottle;
			resize();
		});
		
		if (universe.constant.ipad) {
			document.getElementById('cosmos').ontouchstart = function(event) {
				var _xAxis = (event.touches[0].pageX / universe.constant.viewportWidth) * 100;
    			var _yAxis = ((event.touches[0].pageY - universe.context.overlay.height()) / (universe.constant.viewportHeight - universe.context.overlay.height())) * 100;
				
				// Animate to finger position
				var from = {
					xAxis: Xprev,
					yAxis: Yprev
				};
				var to = {
					xAxis: _xAxis,
					yAxis: _yAxis
				};
				$(from).animate(to, {
					duration: 250,
					queue: false,
					easing: 'linear',
					step: function() {
						update(this.xAxis, this.yAxis);
					}, complete: function() {
						// And back to center
						var from = {
							xAxis: Xprev,
							yAxis: Yprev
						};
						var to = {
							xAxis: 50,
							yAxis: 50
						};
						$(from).animate(to, {
							duration: 500,
							easing: 'linear',
							queue: false,
							step: function() {
								update(this.xAxis, this.yAxis);
							}
						});
					}
				});
				
				// Disable scrolling in landscape mode
				if (universe.constant.viewportWidth > universe.constant.viewportHeight) {
					event.preventDefault();
					return false;
				}
			}
			/*
			if (window.DeviceMotionEvent !== undefined) {
				motionRange = {
					x: { min: 0, max: 0},
					y: { min: 0, max: 0},
					z: { min: 0, max: 0}
				};
				window.ondevicemotion = function(event) {
				  var accel = event.accelerationIncludingGravity;
				  
				  // X-axis
				  var ax = Math.round(accel.x * 100);
				  if (ax < motionRange.x.min) motionRange.x.min = ax;
				  if (ax > motionRange.x.max) motionRange.x.max = ax;
				  var axPercentage = Math.round(((ax - motionRange.x.max) / (motionRange.x.min - motionRange.x.max)) * 100);
				  var x = (universe.constant.viewportHeight / 100) * axPercentage;
				  
				  // Z-axis
				  var az = Math.round(accel.z * 100);
				  if (az < motionRange.z.min) motionRange.z.min = az;
				  if (az > motionRange.z.max) motionRange.z.max = az;
				  var azPercentage = Math.round(((az - motionRange.z.max) / (motionRange.z.min - motionRange.z.max)) * 100);
				  var z = (universe.constant.viewportHeight / 100) * azPercentage;
				  
				  // Y-axis
				  var ay = Math.round(accel.y * 100);
				  if (ay < motionRange.y.min) motionRange.y.min = ay;
				  if (ay > motionRange.y.max) motionRange.y.max = ay;
				  var ayPercentage = Math.round(((ay - motionRange.y.max) / (motionRange.y.min - motionRange.y.max)) * 100);
				  var y = (universe.constant.viewportWidth / 100) * ayPercentage;
				  
				  $('#debug').html(
					'ax: ' + axPercentage + '%<br />' +
					'ay: ' + ayPercentage + '%<br />' +
					'az: ' + azPercentage + '%'
				  );
				  //$('#debug').html('ay: ' + ay + '<br />' + ayPercentage + '%<br />y: ' + y);
				  //$('#debug').html('ax: ' + ax + '<br />' + axPercentage + '%<br />x: ' + x);
				  //$('#debug').html('ax: ' + ax + '<br />ay: ' + ay + '<br />az: ' + az);
				  //$('#debug').html('ay min: ' + motionRange.y.min + '<br />ay max: ' + motionRange.y.max );
				  update(y, x);
				};
			}*/
		} else {
			$(window).on('mousemove', function(event) {
				var _xAxis = (event.pageX / universe.constant.viewportWidth) * 100;
				var _yAxis = (event.pageY / universe.constant.viewportHeight) * 100;
				update(_xAxis, _yAxis);
			});
		}
		
		$(window).scroll(function() {
			if (universe.constant.viewportWidth > 900) {
				$('html, body').scrollTop(0);
				event.preventDefault();
				return false;
			}
		});
		
		// Set stage for the first time
		resize();
	},
	
	transform: function (css, context) {
		if (typeof css == 'object' && universe.constant.transformSupport && universe.constant.useTransforms) {
						
			var transform = [];
			if (css.left != undefined && css.top != undefined) {
				x = css.left; y = css.top;
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
				var vendorPrefixes = ['', '-webkit-', '-moz-', '-o-'];
				for (var i = vendorPrefixes.length - 1; i >= 0; i--) {
					css[vendorPrefixes[i] + 'transform'] = transform.join(' ');
					css[vendorPrefixes[i] + 'transform-origin'] = '50% 50%';
					css[vendorPrefixes[i] + 'transform-duration'] = '0';
				}
			}
			
		}
		context.css(css);
	},
	
	registerKeystrokes: function() {
		if (universe.constant.ios || universe.constant.android) { return; }
		universe.log('Universe: registering keystrokes');
		
		$(document).keyup(function(e) {
			switch(e.keyCode) {
				case 27: // Esc
					if (universe.context.overlay.hasClass('is-open')) {
						$('#unfold a', universe.context.overlay).trigger('click');
					}
				break;
				
				case 78: // n
					nebula.toggleColorPicker();
				break;
				
				default:
					universe.log('Key pressed: ' + e.keyCode);
				break;
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
		
	inArray: function(needle, array1) {
		for (j=0; j<array1.length; j++) {
			if(array1[j]==needle) { return true; }
		}
		return false;
	},

	stopwatch: function (name, start) {
		var _timer = new Date().getTime();
		if (start === true) {
			universe.constant.stopwatch[name] = _timer;
		} else {
			universe.log('Stopwatch: ' + name + ' took ' + (_timer - universe.constant.stopwatch[name]));
			universe.constant.stopwatch[name] = _timer;
		}
	}
};

if (typeof window.jQuery != 'undefined') {
	$(document).ready(function() {
		universe.init();
	});
}
