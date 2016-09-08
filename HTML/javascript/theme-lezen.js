var theme = {
    name: 'lezen',

    audio: {},

    nebula: {
        mood: ['#ff00cc', '#ffa200'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
                'fili-boek-lezen',
                'fili-boek-bladeren'
            ]
        }
    },

    animations: {
        'empty': {
            url: '//cdn.fili.nl/images/anim/empty.png',
            run: -1,
            cols: 1,
            rows: 1
        }, ///////////

        'fili-boek-bladeren': {
            url: '//cdn.fili.nl/images/anim/lezen/pxlfili_lezen_S.png',
            run: 1, // loopbaar
            cols: 5,
            rows: 3,
            delay: 100,
            bottom: 378,
            left: 170,
            script: [
                {sprite: 5}, // bladzijde omslaan
                {sprite: 6},
                {sprite: 7},
                {sprite: 8},
                {sprite: 9},
                {sprite: 10},
                {sprite: 11},
                {sprite: 12}
            ]
        },

        'fili-boek-lezen': {
            url: '//cdn.fili.nl/images/anim/lezen/pxlfili_lezen_S.png',
            run: 1, // loopbaar
            cols: 5,
            rows: 3,
            delay: 200,
            bottom: 378,
            left: 170,
            script: [
                {sprite: 1}, // regels lezen
                {sprite: 2, delay: 800},
                {sprite: 1},
                {sprite: 3, delay: 400},

                {sprite: 1}, // regels lezen
                {sprite: 2, delay: 800},
                {sprite: 1},
                {sprite: 3, delay: 400},

                {sprite: 1}, // regels lezen
                {sprite: 2, delay: 400},
                {sprite: 1},
                {sprite: 3, delay: 800},

                {sprite: 1}, // ogen knipperen
                {sprite: 4},
                {sprite: 1}
            ]
        }
    }
};
