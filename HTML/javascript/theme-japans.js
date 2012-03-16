
var theme = {
	name: 'japans',
	
	audio: {},
	
	nebula: {
		mood: ['#fad414', '#db6bdb'],
		diameter: 75
	},
	
	sprites: {
		planet: {
			'spriteFili': [
				'fili-bellen',
				'fili-japans-eten'
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
		
		'fili-bellen': {
			url: '/images/anim/japans/pxlfili_bellen_S.png',
			run: 1,
			cols: 15,
			rows: 3,
			delay: 100,
			left: 106,
			bottom: 378,
			script: [
				{frame: 1, delay: 3000}, // knipper
				{frame: 2, delay: 400},
				{frame: 1, delay: 3000},
				
				{frame: 7},
				{frame: 8},
				{frame: 9},
				{frame: 10},
				{frame: 11},
				{frame: 12},
				{frame: 13},
				{frame: 14},
				{frame: 15, delay: 800},
				{frame: 16},
				{frame: 17},
				{frame: 18},
				
				{frame: 19}, // intoetsen
				{frame: 20},
				{frame: 19},
				{frame: 21},
				{frame: 19},
				{frame: 20},
				{frame: 21},
				{frame: 19},
				{frame: 21},

				{frame: 19}, // intoetsen
				{frame: 20},
				{frame: 19},
				{frame: 21},
				{frame: 19},
				{frame: 20},
				{frame: 21},
				{frame: 19},
				{frame: 21},
				
				{frame: 19}, // intoetsen
				{frame: 20},
				{frame: 19},
				{frame: 21},
				{frame: 19},
				{frame: 20},
				{frame: 21},
				{frame: 19},
				{frame: 21},

				{frame: 19}, // intoetsen
				{frame: 20},
				{frame: 19},
				{frame: 21},
				{frame: 19},
				{frame: 20},
				{frame: 21},
				{frame: 19},
				{frame: 21},
				
				{frame: 22}, // praten
				{frame: 23},
				{frame: 24, delay: 1000},
				{frame: 25},
				{frame: 24},
				{frame: 25},
				{frame: 27},
				{frame: 26},
				{frame: 27, delay: 1000},
				{frame: 26},
				{frame: 27},
				{frame: 26, delay: 400},
				{frame: 27},
				{frame: 26, delay: 2000},
				
				{frame: 38},
				{frame: 39},
				{frame: 38, delay: 800},
				{frame: 40},
				{frame: 41},
				{frame: 42},
				{frame: 13},
				{frame: 12},
				{frame: 11},
				{frame: 10},
				{frame: 9},
				{frame: 8},
				
				{frame: 1, delay: 2000},
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				{frame: 3},
				{frame: 4},
				{frame: 5},
				{frame: 6},
				
				{frame: 1, delay: 1000}, // knipper
				{frame: 2, delay: 400},
				{frame: 1, delay: 3000}
			]
		},
		
		'fili-japans-eten': {
			url: '/images/anim/japans/pxlfili_japans2_S.png',
			run: 1,
			cols: 7,
			rows: 13,
			delay: 100,
			left: 114,
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
				{frame: 26, delay: 1000},
				{frame: 27},
				{frame: 28},
				{frame: 29},
				{frame: 30},
				{frame: 31},
				{frame: 32},
				{frame: 33},
				{frame: 34},
				
				{frame: 35}, // stokjes
				{frame: 36},
				{frame: 35},
				{frame: 36},
				{frame: 35},
				
				{frame: 37},
				{frame: 38},
				{frame: 39},
				{frame: 40, delay: 150}, // uitpakken
				{frame: 41, delay: 150},
				{frame: 42, delay: 150},
				{frame: 43, delay: 150},
				{frame: 44, delay: 150},
				{frame: 45, delay: 150},
				{frame: 46, delay: 400},
				{frame: 47},
				{frame: 48},
				{frame: 49},
				{frame: 50},
				{frame: 51, delay: 400},
				{frame: 52},
				{frame: 53},
				{frame: 54},
				
				{frame: 55}, // eten sushi (groen)
				{frame: 59},
				{frame: 63},
				{frame: 64},
				{frame: 65},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 66},
				{frame: 67},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				
				{frame: 56}, // eten radijs (rood)
				{frame: 60},
				{frame: 63},
				{frame: 64},
				{frame: 65},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 66},
				{frame: 67},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				
				{frame: 57}, // eten tofu (geel)
				{frame: 61},
				{frame: 63},
				{frame: 64},
				{frame: 65},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 66},
				{frame: 67},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				
				{frame: 58}, // eten kip (bruin)
				{frame: 62},
				{frame: 63},
				{frame: 64},
				{frame: 65},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 64, delay: 200},
				{frame: 65, delay: 200},
				{frame: 66},
				{frame: 67},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				{frame: 69},
				{frame: 68},
				
				{frame: 70}, // inpakken
				{frame: 71},
				{frame: 72},
				{frame: 73},
				{frame: 74},
				{frame: 75},
				{frame: 76, delay: 800},
				{frame: 77},
				{frame: 78},
				{frame: 79},
				{frame: 80},
				{frame: 81},
				{frame: 82},
				{frame: 83},
				{frame: 84},
				{frame: 85, delay: 2000}
			]
		}
	}
};
