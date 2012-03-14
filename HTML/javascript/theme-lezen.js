
var theme = {
	name: 'lezen',
	
	nebula: {
		mood: ['#ff00cc', '#ffa200'],
		diameter: 75
	},
	
	planet: {
		animations: {
			'empty': {
				url: '/images/anim/empty.png',
				run: 0,
				cols: 1,
				rows: 1
			}, ///////////
			
			'fili-boek-bladeren': {
				url: '/images/anim/lezen/pxlfili_lezen_S.png',
				run: 1, // loopbaar
				cols: 5,
				rows: 3,
				delay: 100,
				bottom: 378,
				left: 170,
				script: [
					{frame: 5}, // bladzijde omslaan
					{frame: 6},
					{frame: 7},
					{frame: 8},
					{frame: 9},
					{frame: 10},
					{frame: 11},
					{frame: 12}
				]
			},
			
			'fili-boek-lezen': {
				url: '/images/anim/lezen/pxlfili_lezen_S.png',
				run: 1, // loopbaar
				cols: 5,
				rows: 3,
				delay: 200,
				bottom: 378,
				left: 170,
				script: [
					{frame: 1}, // regels lezen
					{frame: 2, delay: 800},
					{frame: 1},
					{frame: 3, delay: 400},
					
					{frame: 1}, // regels lezen
					{frame: 2, delay: 800},
					{frame: 1},
					{frame: 3, delay: 400},
					
					{frame: 1}, // regels lezen
					{frame: 2, delay: 400},
					{frame: 1},
					{frame: 3, delay: 800},
					
					{frame: 1}, // ogen knipperen
					{frame: 4},
					{frame: 1}
				]
			}
		},
		
		spriteFili: [
			'fili-boek-lezen',
			'fili-boek-bladeren'
		],
		
		spriteExtra: ['empty'],
		spriteSignal: ['empty']
	},
	
	universe: {
		animations: {
		},
		
		spriteOutside: ['empty']
	}
	
};
