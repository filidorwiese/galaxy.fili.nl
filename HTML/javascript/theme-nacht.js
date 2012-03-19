
var theme = {
	name: 'nacht',
	
	audio: {},
	
	nebula: {
		mood: ['#000000', '#85a6a6'],
		diameter: 75
	},
	
	sprites: {
		planet: {
			'sprite-fili': [
				'fili-slaap', 'fili-slaap-omdraai', 'fili-slaap-omgekeerd',
				'fili-omdraai-reversed', 'fili-slaap-idee', 'fili-laptop-pakken',
				'trigger:spriteSignal:stop', 'fili-typen', 'trigger:spriteSignal:stop',
				'fili-laptop-wegdoen', 'fili-omdraai', 'fili-lopen-rechts',
				'fili-slaap-idee-klaar'
			],
			'sprite-signal': ['empty', 'signal-normaal']
		}
	},
	
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
		
		
		'fili-slaap': {
			url: '/images/anim/nacht/pxlfili_slaap_S.png',
			run: 5, // loopbaar
			cols: 8,
			rows: 4,
			delay: 100,
			bottom: 378,
			left: 190,
			cutOffFrames: 1
		},
		
		'fili-slaap-omdraai': {
			url: '/images/anim/nacht/pxlfili_slaap_omdraai_S.png',
			run: 1,
			cols: 4,
			rows: 2,
			delay: 100,
			bottom: 378,
			left: 190,
			cutOffFrames: 1
		},
		
		'fili-slaap-omgekeerd': {
			url: '/images/anim/nacht/pxlfili_slaap-omgekeerd_S.png',
			run: 3, // loopbaar
			cols: 8,
			rows: 4,
			delay: 100,
			bottom: 378,
			left: 190,
			cutOffFrames: 1
		},
		
		'fili-omdraai-reversed': {
			url: '/images/anim/nacht/pxlfili_slaap_omdraai_S.png',
			run: 1,
			cols: 4,
			rows: 2,
			delay: 100,
			bottom: 378,
			left: 190,
			reversed: true,
			cutOffFrames: 1
		},
		
		'fili-slaap-idee': {
			url: '/images/anim/nacht/pxlfili_slaap_idee_S.png',
			run: 1,
			cols: 8,
			rows: 3,
			delay: 100,
			bottom: 378,
			left: 190,
			script: [
				{frame: 1},
				{frame: 2, delay: 400},
				{frame: 3, delay: 400},
				{frame: 2, delay: 400},
				{frame: 3, delay: 400},
				{frame: 2, delay: 400},
				{frame: 3, delay: 400},
				{frame: 4, delay: 800},
				{frame: 5, delay: 800},
				{frame: 4, delay: 800},
				{frame: 5, delay: 800},
				{frame: 4, delay: 200},
				{frame: 5, delay: 200},
				{frame: 6},
				{frame: 7},
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
				{frame: 19, left: -8},
				{frame: 20, left: -8},
				{frame: 21, left: -8},
				{frame: 20, left: -8},
				{frame: 19, left: -8},
				{frame: 20, left: -8},
				{frame: 21, left: -8},
				{frame: 22},
				{frame: 23}
			]
		},
		
		'fili-laptop-pakken': {
			url: '/images/anim/nacht/pxlfili_laptopweg_S.png',
			run: 1,
			cols: 9,
			rows: 3,
			delay: 100,
			left: 122,
			bottom: 378,
			cutOffFrames: 3,
			reversed: true
		},
		
		'fili-typen': {
			url: '/images/anim/nacht/pxlfili_typzijkant_S.png',
			run: 15, // loopbaar
			cols: 5,
			rows: 1,
			delay: 100,
			left: 122,
			bottom: 378
		},
		
		'fili-laptop-wegdoen': {
			url: '/images/anim/nacht/pxlfili_laptopweg_S.png',
			run: 1,
			cols: 9,
			rows: 3,
			delay: 100,
			left: 122,
			bottom: 378
		},
		
		'fili-omdraai': {
			url: '/images/anim/nacht/pxlfili_slaap_idee-klaar_S.png',
			run: 1,
			cols: 7,
			rows: 3,
			delay: 100,
			left: 126,
			bottom: 378,
			script: [
				{frame: 2},
				{frame: 1}
			]
		},
		
		'fili-lopen-rechts': {
			url: '/images/anim/nacht/pxlfili_loopR_S.png',
			run: 1,
			cols: 3,
			rows: 1,
			delay: 100,
			left: 126,
			bottom: 378,
			script: [
				{frame: 1, left: 8},
				{frame: 2, left: 8},
				{frame: 3, left: 8},
				{frame: 2, left: 8},
				{frame: 1, left: 8},
				{frame: 2, left: 8},
				{frame: 3, left: 8}
			]
		},
		
		'fili-slaap-idee-klaar': {
			url: '/images/anim/nacht/pxlfili_slaap_idee-klaar_S.png',
			run: 1,
			cols: 7,
			rows: 3,
			delay: 100,
			left: 178,
			bottom: 378,
			cutOffFrames: 1
		}
	}
};
