
var theme = {
	name: 'ontbijt',
	
	nebula: {
		mood: ['#e8f0fc', '#f5d1b1'],
		diameter: 75
	},
	
	planet: {
		animations: {
			'signal-normaal': {
				url: '/images/anim/signal.png',
				run: 0,
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
				run: 0,
				cols: 1,
				rows: 1
			}, ///////////
			
			'fili-typen': {
				url: '/images/anim/ontbijt/pxlfili_typzijkant_rev_S.png',
				run: 10, // loopbaar
				cols: 5,
				rows: 1,
				delay: 100,
				left: 114,
				bottom: 378
			},
			
			'fili-laptop-wegdoen': {
				url: '/images/anim/ontbijt/pxlfili_laptopweg_rev_S.png',
				run: 1,
				cols: 9,
				rows: 3,
				delay: 100,
				left: 114,
				bottom: 378
			},
			
			'fili-eten-pakken': {
				url: '/images/anim/ontbijt/pxlfili_koelkasteten_rev_S.png',
				run: 1,
				cols: 6,
				rows: 13,
				delay: 100,
				left: 122,
				bottom: 378,
				cutOffFrames: 4
			},
			
			'fili-eten': {
				url: '/images/anim/ontbijt/pxlfili_broodje_rev_S.png',
				run: 3, // loopbaar
				cols: 5,
				rows: 2,
				delay: 100,
				left: 122,
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
				url: '/images/anim/ontbijt/pxlfili_broodje_rev_S.png',
				run: 1,
				cols: 5,
				rows: 2,
				delay: 100,
				left: 122,
				bottom: 378,
				script: [
					{frame: 2, delay: 200},
					{frame: 1, delay: 200}
				]
			},
			
			'fili-eten-klaar': {
				url: '/images/anim/ontbijt/pxlfili_broodjeopeten_rev_S.png',
				run: 1,
				cols: 11,
				rows: 3,
				delay: 150,
				left: 122,
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
				url: '/images/anim/ontbijt/pxlfili_knipper_S.png',
				run: 1,
				cols: 2,
				rows: 1,
				delay: 100,
				left: 134,
				bottom: 378,
				script: [
					{frame: 2, delay: 1000}, // knipper
					{frame: 1, delay: 200},
					{frame: 2, delay: 200},
					{frame: 1, delay: 200},
					{frame: 2, delay: 1000}
				]
			},
			
			'fili-laptop-pakken': {
				url: '/images/anim/ontbijt/pxlfili_laptopweg_rev_S.png',
				run: 1,
				cols: 9,
				rows: 3,
				delay: 100,
				left: 114,
				bottom: 378,
				reversed: true
			},
		},
		
		spriteFili: [
			'fili-typen', 'trigger:spriteSignal:stop',
			'fili-laptop-wegdoen',
			'fili-eten-pakken',
			'fili-eten-knipper',
			'fili-eten',
			'fili-eten-klaar',
			'fili-knipper',
			'fili-laptop-pakken',
			'trigger:spriteSignal:stop'
		],
		spriteExtra: ['empty'],
		spriteSignal: ['signal-normaal', 'empty']
	},
	
	universe: {
		animations: {
		},
		
		spriteOutside: ['empty']
	}
	
};
