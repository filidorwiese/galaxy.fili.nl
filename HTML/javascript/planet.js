
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
				{sprite: 1, delay: 2000},
				{sprite: 2},
				{sprite: 1, delay: 4000},
				{sprite: 4},
				{sprite: 1, delay: 300},
				{sprite: 4, delay: 100},
				{sprite: 1, delay: 3000},
				{sprite: 3},
				{sprite: 1, delay: 3000},
				{sprite: 5}
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
				{sprite: 1, delay: 2000},
				{sprite: 4},
				{sprite: 1, delay: 300},
				{sprite: 4, delay: 100},
				{sprite: 1, delay: 2000},
				{sprite: 6},
				{sprite: 1, delay: 2000},
				{sprite: 3},
				{sprite: 1, delay: 2000},
				{sprite: 5},
				{sprite: 1, delay: 2000},
				{sprite: 2, delay: 2000}
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
