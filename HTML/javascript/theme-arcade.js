
var theme = {
	name: 'arcade',
	
	audio: {},
	
	nebula: {
		mood: [ '#00ffff', '#ff00ff'],
		diameter: 75
	},
	
	sprites: {
		planet: {
			'spriteFili': [
				'fili-arcade-spelen',
				'fili-arcade-schieten'
			]
		}
	},
	
	animations: {
		'empty': {
			url: '/images/anim/empty.png',
			run: 0,
			cols: 1,
			rows: 1
		}, ///////////
		
		'fili-arcade-spelen': {
			url: '/images/anim/arcade/pxlfili_arcade_S.png',
			run: 3, // loopbaar
			cols: 3,
			rows: 9,
			delay: 100,
			bottom: 378,
			left: 0,
			script: [
				{frame: 1},
				{frame: 2},
				{frame: 1},
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 5},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 5},
				{frame: 4},
				{frame: 6},
				{frame: 7}
			]
		},
		
		'fili-arcade-schieten': {
			url: '/images/anim/arcade/pxlfili_arcade_S.png',
			run: 1, // loopbaar
			cols: 3,
			rows: 9,
			delay: 100,
			bottom: 378,
			left: 0,
			script: [
				{frame: 8},
				{frame: 9},
				{frame: 10},
				{frame: 11},
				{frame: 12},
				{frame: 13},
				{frame: 14},
				{frame: 15},
				{frame: 16},
				{frame: 17},
				{frame: 18},
				{frame: 19},
				{frame: 20},
				{frame: 21},
				{frame: 22},
				{frame: 23},
				{frame: 24},
				{frame: 25},
				{frame: 26},
				{frame: 27}
			]
		}
	}
};
