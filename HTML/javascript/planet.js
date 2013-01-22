
var planet = {
	constant: {},
	
	init: function() {
		if (universe.constant.smallScreen) { return false; }
		
		universe.log('Init: planet');
		
		planet.spaceDebris();
		planet.spriteEyes();
	},
	
	loadTheme: function() {
	},
	
	spriteEyes: function() {
		universe.context.planet.append('<div id="sprite-eyes1"></div>');
		$('#sprite-eyes1', universe.context.planet).spriteAnimator({
			url: '/images/anim/filinl_oogjes1.png',
			cols: 5,
			rows: 1,
			bottom:10,
			left:37
		}).play({
			run: -1,
			delay: 200,
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
		universe.context.planet.append('<div id="sprite-eyes2"></div>');
		$('#sprite-eyes2', universe.context.planet).spriteAnimator({
			url: '/images/anim/filinl_oogjes2.png',
			cols: 6,
			rows: 1,
			bottom:88,
			right:25
		}).play({
			run: -1,
			delay: 200,
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
		if (!universe.constant.transformSupport || !universe.constant.useTransforms) { return false; }
		
		universe.log('Planet: spawning space debris');
		universe.context.spaceDebris.append('<div class="one"></div><div class="two"></div><div class="three">');
		$('.one', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_a_S_alpha50.png',
			cols: 16,
			rows: 1
		}).play({
            run: -1,
			delay: 150
        });
		$('.two', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_b_S_alpha50.png',
			cols: 8,
			rows: 2
		}).play({
            run: -1,
			delay: 150
        });
		$('.three', universe.context.spaceDebris).spriteAnimator({
			url: '/images/anim/debris2d_c_S_alpha50.png',
			cols: 5,
			rows: 2
		}).play({
            run: -1,
			delay: 150
        });
	}
};
