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
                'trigger:sprite-signal:stop', 'fili-typen', 'trigger:sprite-signal:stop',
                'fili-laptop-wegdoen', 'fili-omdraai', 'fili-lopen-rechts',
                'fili-slaap-idee-klaar'
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
            startSprite: 7,
            cutOffFrames: 1,
            reversed: true
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
                {sprite: 1},
                {sprite: 2, delay: 400},
                {sprite: 3, delay: 400},
                {sprite: 2, delay: 400},
                {sprite: 3, delay: 400},
                {sprite: 2, delay: 400},
                {sprite: 3, delay: 400},
                {sprite: 4, delay: 800},
                {sprite: 5, delay: 800},
                {sprite: 4, delay: 800},
                {sprite: 5, delay: 800},
                {sprite: 4, delay: 200},
                {sprite: 5, delay: 200},
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
                {sprite: 19, left: -8},
                {sprite: 20, left: -8},
                {sprite: 21, left: -8},
                {sprite: 20, left: -8},
                {sprite: 19, left: -8},
                {sprite: 20, left: -8},
                {sprite: 21, left: -8},
                {sprite: 22},
                {sprite: 23}
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
            startSprite: 27,
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
                {sprite: 2},
                {sprite: 1}
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
                {sprite: 1, left: 8},
                {sprite: 2, left: 8},
                {sprite: 3, left: 8},
                {sprite: 2, left: 8},
                {sprite: 1, left: 8},
                {sprite: 2, left: 8},
                {sprite: 3, left: 8}
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
