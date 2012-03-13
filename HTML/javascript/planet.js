
var planet = {
	constant: {},
	
	init: function() {
		if (universe.constant.iphone || universe.constant.android) { return; }
		
		universe.log('Init: planet');
		
		// Built markup
		universe.context.planet.append('<div id="spriteFili"></div><div id="spriteExtra"></div><div id="spriteSignal"></div>');
		universe.context.planet.append('<div id="spriteEyes1"></div><div id="spriteEyes2"></div>');
		
		planet.spaceDebris();
	},
	
	loadTheme: function() {
		// Reset animations
		planet.constant.spriteFiliIterator = -1;
		planet.constant.spriteExtraIterator = -1;
		planet.constant.spriteSignalIterator = -1;
		
		planet.preloadSprites();
		planet.spriteFili();
		planet.spriteExtra();
		planet.spriteSignal();
		planet.spriteEyes();
	},
	
	spriteFili: function() {
		planet.constant.spriteFiliIterator += 1;
		if (planet.constant.spriteFiliIterator >= theme.planet.spriteFili.length) { planet.constant.spriteFiliIterator = 0; }
		
		var _animation = theme.planet.spriteFili[planet.constant.spriteFiliIterator];
		if (_animation.match(/trigger:/)) {
			var _trigger = _animation.split(':');
			universe.log('Planet: trigger ' + _trigger[1] + ':' + _trigger[2]);
			$('#' + _trigger[1]).triggerHandler(_trigger[2]);
			planet.spriteFili();
		} else {
			var _animationObject = theme.planet.animations[_animation];
			
			$('#spriteFili', universe.context.planet).spriteAnimator(_animationObject).on('stop', function(){
				planet.spriteFili();
			});
		}
	},
	
	spriteSignal: function() {
		planet.constant.spriteSignalIterator += 1;
		if (planet.constant.spriteSignalIterator >= theme.planet.spriteSignal.length) { planet.constant.spriteSignalIterator = 0; }
		
		var _animation = theme.planet.spriteSignal[planet.constant.spriteSignalIterator];
		var _animationObject = theme.planet.animations[_animation];
		
		$('#spriteSignal', universe.context.planet).spriteAnimator(_animationObject).on('stop', function(){
			planet.spriteSignal();
		});
	},
	
	spriteExtra: function() {
		planet.constant.spriteExtraIterator += 1;
		if (planet.constant.spriteExtraIterator >= theme.planet.spriteExtra.length) { planet.constant.spriteExtraIterator = 0; }
		
		var _animation = theme.planet.spriteExtra[planet.constant.spriteExtraIterator];
		var _animationObject = theme.planet.animations[_animation];
		
		$('#spriteExtra', universe.context.planet).spriteAnimator(_animationObject).on('stop', function(){
			planet.spriteExtra();
		});
	},
	
	spriteEyes: function() {
		$('#spriteEyes1', universe.context.planet).spriteAnimator({
			url: '/images/anim/filinl_oogjes1.png',
			run: 0,
			delay: 200,
			cols: 5,
			rows: 1,
			bottom:10,
			left:37,
			script: [
				{frame: 1, delay: 2000},
				{frame: 2},
				{frame: 1, delay: 4000},
				{frame: 4},
				{frame: 1, delay: 300},
				{frame: 4, delay: 100},
				{frame: 1, delay: 3000},
				{frame: 3},
				{frame: 1, delay: 3000},
				{frame: 5}
			]
		});
		$('#spriteEyes2', universe.context.planet).spriteAnimator({
			url: '/images/anim/filinl_oogjes2.png',
			run: 0,
			delay: 200,
			cols: 6,
			rows: 1,
			bottom:88,
			right:25,
			script: [
				{frame: 1, delay: 2000},
				{frame: 4},
				{frame: 1, delay: 300},
				{frame: 4, delay: 100},
				{frame: 1, delay: 2000},
				{frame: 6},
				{frame: 1, delay: 2000},
				{frame: 3},
				{frame: 1, delay: 2000},
				{frame: 5},
				{frame: 1, delay: 2000},
				{frame: 2, delay: 2000}
			]
		});
	},
	
	spaceDebris: function() {
		if (!universe.constant.transformSupport || !universe.constant.useTransforms) { return; }
		
		universe.log('Planet: spawning space debris');
		universe.context.spaceDebris.append('<div class="one"></div><div class="two"></div><div class="three">');
		$('.one', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_a_S_alpha50.png',
			run: 0,
			delay: 150,
			cols: 16,
			rows: 1
		});
		$('.two', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_b_S_alpha50.png',
			run: 0,
			delay: 150,
			cols: 8,
			rows: 2
		});
		$('.three', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_c_S_alpha50.png',
			run: 0,
			delay: 150,
			cols: 5,
			rows: 2
		});
	},
	
	preloadSprites: function() {
		var sources = [];
		var o = 0;
		for (var i in theme.planet.animations) {
			if (universe.inArray(theme.planet.animations[i].url, sources) === true) { continue; }
			sources[o] = theme.planet.animations[i].url;
			o++;
		}
		universe.log('Planet: preloading ' + sources);
		
		var images = [];
		for (i = 0; i < sources.length; i++) {
			images[i] = new Image();
			images[i].src = sources[i];
		}
	}
};
