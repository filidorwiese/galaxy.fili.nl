var theme = {
    name: 'japans',

    audio: {},

    nebula: {
        mood: ['#fad414', '#db6bdb'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
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
                {sprite: 1, delay: 3000}, // knipper
                {sprite: 2, delay: 400},
                {sprite: 1, delay: 3000},

                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12},
                {sprite: 13},
                {sprite: 14},
                {sprite: 15, delay: 800},
                {sprite: 16},
                {sprite: 17},
                {sprite: 18},

                {sprite: 19}, // intoetsen
                {sprite: 20},
                {sprite: 19},
                {sprite: 21},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 19},
                {sprite: 21},

                {sprite: 19}, // intoetsen
                {sprite: 20},
                {sprite: 19},
                {sprite: 21},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 19},
                {sprite: 21},

                {sprite: 19}, // intoetsen
                {sprite: 20},
                {sprite: 19},
                {sprite: 21},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 19},
                {sprite: 21},

                {sprite: 19}, // intoetsen
                {sprite: 20},
                {sprite: 19},
                {sprite: 21},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 19},
                {sprite: 21},

                {sprite: 22}, // praten
                {sprite: 23},
                {sprite: 24, delay: 1000},
                {sprite: 25},
                {sprite: 24},
                {sprite: 25},
                {sprite: 27},
                {sprite: 26},
                {sprite: 27, delay: 1000},
                {sprite: 26},
                {sprite: 27},
                {sprite: 26, delay: 400},
                {sprite: 27},
                {sprite: 26, delay: 2000},

                {sprite: 38},
                {sprite: 39},
                {sprite: 38, delay: 800},
                {sprite: 40},
                {sprite: 41},
                {sprite: 42},
                {sprite: 13},
                {sprite: 12},
                {sprite: 11},
                {sprite: 10},
                {sprite: 9},
                {sprite: 8},

                {sprite: 1, delay: 2000},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},

                {sprite: 1, delay: 1000}, // knipper
                {sprite: 2, delay: 400},
                {sprite: 1, delay: 3000}
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
                {sprite: 1},
                {sprite: 2},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12},
                {sprite: 13},
                {sprite: 14},
                {sprite: 15},
                {sprite: 16},
                {sprite: 17},
                {sprite: 18},
                {sprite: 19},
                {sprite: 20},
                {sprite: 21},
                {sprite: 22},
                {sprite: 23},
                {sprite: 24},
                {sprite: 25},
                {sprite: 26, delay: 1000},
                {sprite: 27},
                {sprite: 28},
                {sprite: 29},
                {sprite: 30},
                {sprite: 31},
                {sprite: 32},
                {sprite: 33},
                {sprite: 34},

                {sprite: 35}, // stokjes
                {sprite: 36},
                {sprite: 35},
                {sprite: 36},
                {sprite: 35},

                {sprite: 37},
                {sprite: 38},
                {sprite: 39},
                {sprite: 40, delay: 150}, // uitpakken
                {sprite: 41, delay: 150},
                {sprite: 42, delay: 150},
                {sprite: 43, delay: 150},
                {sprite: 44, delay: 150},
                {sprite: 45, delay: 150},
                {sprite: 46, delay: 400},
                {sprite: 47},
                {sprite: 48},
                {sprite: 49},
                {sprite: 50},
                {sprite: 51, delay: 400},
                {sprite: 52},
                {sprite: 53},
                {sprite: 54},

                {sprite: 55}, // eten sushi (groen)
                {sprite: 59},
                {sprite: 63},
                {sprite: 64},
                {sprite: 65},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 66},
                {sprite: 67},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},

                {sprite: 56}, // eten radijs (rood)
                {sprite: 60},
                {sprite: 63},
                {sprite: 64},
                {sprite: 65},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 66},
                {sprite: 67},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},

                {sprite: 57}, // eten tofu (geel)
                {sprite: 61},
                {sprite: 63},
                {sprite: 64},
                {sprite: 65},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 66},
                {sprite: 67},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},

                {sprite: 58}, // eten kip (bruin)
                {sprite: 62},
                {sprite: 63},
                {sprite: 64},
                {sprite: 65},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 64, delay: 200},
                {sprite: 65, delay: 200},
                {sprite: 66},
                {sprite: 67},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},
                {sprite: 69},
                {sprite: 68},

                {sprite: 70}, // inpakken
                {sprite: 71},
                {sprite: 72},
                {sprite: 73},
                {sprite: 74},
                {sprite: 75},
                {sprite: 76, delay: 800},
                {sprite: 77},
                {sprite: 78},
                {sprite: 79},
                {sprite: 80},
                {sprite: 81},
                {sprite: 82},
                {sprite: 83},
                {sprite: 84},
                {sprite: 85, delay: 2000}
            ]
        }
    }
};
