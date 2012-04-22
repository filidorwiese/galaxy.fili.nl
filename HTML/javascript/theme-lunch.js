
var theme = {
	name: 'lunch',
	
	audio: {},
	
	nebula: {
		mood: ['#fff200', '#fcffb0'],
		diameter: 75
	},
	
	sprites: {
		planet: {
			'sprite-fili': [
				'fili-eten-pakken',
				'fili-eten-knipper',
				'fili-eten',
				'fili-eten-klaar',
				'fili-knipper',
				'fili-laptop-pakken',
				'trigger:sprite-signal:stop',
				'fili-typen', 'trigger:sprite-signal:stop',
				'fili-laptop-wegdoen'
			],
			'sprite-signal': ['empty', 'signal-normaal']
		}
	},
	
	animations: {
		'signal-normaal': {
			url: '/images/anim/signal.png',
			run: -1,
			delay: 50,
			cols: 13,
			rows: 1,
			left: 313,
			bottom: 346,
			script: [
				{frame: 1},
				{frame: 2},
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 7},
				{frame: 8},
				{frame: 9},
				{frame: 10},
				{frame: 11},
				{frame: 12},
				{frame: 13, delay: 2000}
			]
		},
		'empty': {
			url: '/images/anim/empty.png',
			run: -1,
			cols: 1,
			rows: 1
		}, ///////////
		
		'fili-typen': {
			url: '/images/anim/lunch/pxlfili_typzijkant_S.png',
			run: 10, // loopbaar
			cols: 5,
			rows: 1,
			delay: 100,
			left: 206,
			bottom: 378
		},
		
		'fili-laptop-wegdoen': {
			url: '/images/anim/lunch/pxlfili_laptopweg_S.png',
			run: 1,
			cols: 9,
			rows: 3,
			delay: 100,
			left: 206,
			bottom: 378
		},
		
		'fili-eten-pakken': {
			url: '/images/anim/lunch/pxlfili_koelkasteten_S.png',
			run: 1,
			cols: 6,
			rows: 13,
			delay: 100,
			left: 130,
			bottom: 378,
			cutOffFrames: 4
		},
		
		'fili-eten': {
			url: '/images/anim/lunch/pxlfili_broodje_S.png',
			run: 3, // loopbaar
			cols: 5,
			rows: 2,
			delay: 100,
			left: 214,
			bottom: 378,
			script: [
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 7},
				{frame: 8, delay: 200},
				{frame: 3, delay: 200},
				{frame: 9, delay: 200},
				{frame: 10, delay: 200},
				{frame: 9, delay: 200},
				{frame: 10, delay: 200},
				{frame: 9, delay: 200},
				{frame: 10, delay: 200},
				{frame: 9, delay: 200},
				{frame: 10, delay: 200},
				{frame: 9, delay: 200},
				{frame: 10, delay: 200}
			]
		},
		
		'fili-eten-knipper': {
			url: '/images/anim/lunch/pxlfili_broodje_S.png',
			run: 1,
			cols: 5,
			rows: 2,
			delay: 100,
			left: 214,
			bottom: 378,
			script: [
				{frame: 1, delay: 200},
				{frame: 2, delay: 200}
			]
		},
		
		'fili-eten-klaar': {
			url: '/images/anim/lunch/pxlfili_broodjeopeten_S.png',
			run: 1,
			cols: 11,
			rows: 3,
			delay: 150,
			left: 214,
			bottom: 378,
			script: [
				{frame: 1},
				{frame: 2},
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 7},
				{frame: 8},
				{frame: 9},
				{frame: 8},
				{frame: 9},
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
				{frame: 16},
				{frame: 17},
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
				{frame: 24},
				{frame: 25},
				{frame: 24},
				{frame: 25},
				{frame: 26},
				{frame: 27},
				{frame: 28},
				{frame: 29},
				{frame: 30},
				{frame: 31},
				{frame: 32},
				{frame: 33},
				{frame: 32},
				{frame: 33},
				{frame: 32},
				{frame: 33}
			]
		},
		
		'fili-knipper': {
			url: '/images/anim/lunch/pxlfili_knipper_S.png',
			run: 1,
			cols: 2,
			rows: 1,
			delay: 100,
			left: 206,
			bottom: 378,
			script: [
				{frame: 1, delay: 1000}, // knipper
				{frame: 2, delay: 200},
				{frame: 1, delay: 200},
				{frame: 2, delay: 200},
				{frame: 1, delay: 1000}
			]
		},
		
		'fili-laptop-pakken': {
			url: '/images/anim/lunch/pxlfili_laptopweg_S.png',
			run: 1,
			cols: 9,
			rows: 3,
			delay: 100,
			left: 206,
			bottom: 378,
			cutOffFrames: 3,
			reversed: true
		}
	}
};
