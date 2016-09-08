var theme = {
    name: 'test',

    audio: {},

    nebula: {
        mood: ['#00FF00', '#00FFFF'],
        diameter: 75
    },

    sprites: {
        planet: {
            'sprite-fili': [
                'fili-slaap', 'fili-slaap-omdraai', 'fili-slaap-omgekeerd', 'fili-omdraai-reversed',
            ]
        }
    },

    animations: {
        'empty': {
            url: '//cdn.fili.nl/images/anim/empty.png',
            run: 0,
            cols: 1,
            rows: 1,
            bottom: 394,
            left: 196
        }, ///////////


        'fili-slaap': {
            url: '//cdn.fili.nl/images/anim/nacht/pxlfili_slaap_S.png',
            run: 1, // loopbaar
            cols: 8,
            rows: 4,
            delay: 100,
            bottom: 378,
            left: 190,
            cutOffFrames: 1
        },

        'fili-slaap-omdraai': {
            url: '//cdn.fili.nl/images/anim/nacht/pxlfili_slaap_omdraai_S.png',
            run: 1,
            cols: 4,
            rows: 2,
            delay: 100,
            bottom: 378,
            left: 190,
            cutOffFrames: 1
        },

        'fili-slaap-omgekeerd': {
            url: '//cdn.fili.nl/images/anim/nacht/pxlfili_slaap-omgekeerd_S.png',
            run: 1, // loopbaar
            cols: 8,
            rows: 4,
            delay: 100,
            bottom: 378,
            left: 190,
            cutOffFrames: 1
        },

        'fili-omdraai-reversed': {
            url: '//cdn.fili.nl/images/anim/nacht/pxlfili_slaap_omdraai_S.png',
            run: 1,
            cols: 4,
            rows: 2,
            delay: 100,
            bottom: 378,
            left: 190,
            reverse: true,
            cutOffFrames: 1
        }
    }
};
