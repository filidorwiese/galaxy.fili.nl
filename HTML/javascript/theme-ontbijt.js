var theme = {
    name: 'ontbijt',

    audio: {},

    nebula: {
        mood: ['#e8f0fc', '#f5d1b1'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
                'fili-typen', 'trigger:sprite-signal:stop',
                'fili-laptop-wegdoen',
                'fili-eten-pakken',
                'fili-eten-knipper',
                'fili-eten',
                'fili-eten-klaar',
                'fili-knipper',
                'fili-laptop-pakken',
                'trigger:sprite-signal:stop'
            ],
            'sprite-signal': ['signal-normaal', 'empty']
        }
    },

    animations: {
        'signal-normaal': {
            url: '//cdn.fili.nl/images/anim/signal.png',
            run: -1,
            delay: 50,
            cols: 13,
            rows: 1,
            left: 313,
            bottom: 346,
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
                {sprite: 13, delay: 2000}
            ]
        },
        'empty': {
            url: '//cdn.fili.nl/images/anim/empty.png',
            run: 0,
            cols: 1,
            rows: 1
        }, ///////////

        'fili-typen': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_typzijkant_rev_S.png',
            run: 10, // loopbaar
            cols: 5,
            rows: 1,
            delay: 100,
            left: 114,
            bottom: 378
        },

        'fili-laptop-wegdoen': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_laptopweg_rev_S.png',
            run: 1,
            cols: 9,
            rows: 3,
            delay: 100,
            left: 114,
            bottom: 378
        },

        'fili-eten-pakken': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_koelkasteten_rev_S.png',
            run: 1,
            cols: 6,
            rows: 13,
            delay: 100,
            left: 122,
            bottom: 378,
            cutOffFrames: 4
        },

        'fili-eten': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_broodje_rev_S.png',
            run: 3, // loopbaar
            cols: 5,
            rows: 2,
            delay: 100,
            left: 122,
            bottom: 378,
            script: [
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 7},
                {sprite: 8, delay: 200},
                {sprite: 3, delay: 200},
                {sprite: 9, delay: 200},
                {sprite: 10, delay: 200},
                {sprite: 9, delay: 200},
                {sprite: 10, delay: 200},
                {sprite: 9, delay: 200},
                {sprite: 10, delay: 200},
                {sprite: 9, delay: 200},
                {sprite: 10, delay: 200},
                {sprite: 9, delay: 200},
                {sprite: 10, delay: 200}
            ]
        },

        'fili-eten-knipper': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_broodje_rev_S.png',
            run: 1,
            cols: 5,
            rows: 2,
            delay: 100,
            left: 122,
            bottom: 378,
            script: [
                {sprite: 2, delay: 200},
                {sprite: 1, delay: 200}
            ]
        },

        'fili-eten-klaar': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_broodjeopeten_rev_S.png',
            run: 1,
            cols: 11,
            rows: 3,
            delay: 150,
            left: 122,
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
                {sprite: 8},
                {sprite: 9},
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
                {sprite: 16},
                {sprite: 17},
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
                {sprite: 24},
                {sprite: 25},
                {sprite: 24},
                {sprite: 25},
                {sprite: 26},
                {sprite: 27},
                {sprite: 28},
                {sprite: 29},
                {sprite: 30},
                {sprite: 31},
                {sprite: 32},
                {sprite: 33},
                {sprite: 32},
                {sprite: 33},
                {sprite: 32},
                {sprite: 33}
            ]
        },

        'fili-knipper': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_knipper_S.png',
            run: 1,
            cols: 2,
            rows: 1,
            delay: 100,
            left: 126,
            bottom: 378,
            script: [
                {sprite: 2, delay: 1000}, // knipper
                {sprite: 1, delay: 200},
                {sprite: 2, delay: 200},
                {sprite: 1, delay: 200},
                {sprite: 2, delay: 1000}
            ]
        },

        'fili-laptop-pakken': {
            url: '//cdn.fili.nl/images/anim/ontbijt/pxlfili_laptopweg_rev_S.png',
            run: 1,
            cols: 9,
            rows: 3,
            delay: 100,
            left: 114,
            bottom: 378,
            startSprite: 27,
            reversed: true
        }
    }
};
