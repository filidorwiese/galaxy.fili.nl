
var theme = {
	name: 'test',
	
	audio: {},
	
	nebula: {
		mood: ['#FFFFFF', '#00FFFF'],
		diameter: 75
	},
	
	sprites: {
		cosmos: {
			'sprite-konami': [
				 'fili-slaap'
			]
		}
	},
	
	animations: {
		'empty': {
			url: '/images/anim/empty.png',
			run: -1,
			cols: 1,
			rows: 1,
			bottom: 394,
			left: 196
		}, ///////////
		
		
		'fili-slaap': {
			url: '/images/anim/nacht/pxlfili_slaap_S.png',
			run: 1, // loopbaar
			cols: 8,
			rows: 4,
			delay: 100,
			top: 0,
			left: 'center',
			cutOffFrames: 1
		}
		
	},
};
