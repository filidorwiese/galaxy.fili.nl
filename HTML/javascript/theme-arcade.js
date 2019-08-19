var theme = {
    name: 'arcade',

    audio: {},

    nebula: {
        mood: ['#00ffff', '#ff00ff'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
                'fili-arcade-spelen',
                'fili-arcade-schieten'
            ]
        }
    },

    animations: {
        'empty': {
            url: '//galaxy.fili.nl/images/anim/empty.png',
            run: 0,
            cols: 1,
            rows: 1
        }, ///////////

        'fili-arcade-spelen': {
            url: '//galaxy.fili.nl/images/anim/arcade/pxlfili_arcade_S.png',
            run: 3, // loopbaar
            cols: 3,
            rows: 9,
            delay: 100,
            bottom: 378,
            left: 0,
            script: [
                {sprite: 1},
                {sprite: 2},
                {sprite: 1},
                {sprite: 3},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 5},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 4},
                {sprite: 5},
                {sprite: 6},
                {sprite: 5},
                {sprite: 4},
                {sprite: 6},
                {sprite: 7}
            ]
        },

        'fili-arcade-schieten': {
            url: '//galaxy.fili.nl/images/anim/arcade/pxlfili_arcade_S.png',
            run: 1, // loopbaar
            cols: 3,
            rows: 9,
            delay: 100,
            bottom: 378,
            left: 0,
            script: [
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
                {sprite: 26},
                {sprite: 27}
            ]
        }
    }
};
