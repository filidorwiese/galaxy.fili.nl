var nebula = {
    constant: {
        starCount: 15,
        lastsprite: 0,
        paletteIterator: null,
        colorPicker: false,
        colorOne: null,
        colorTwo: null
    },

    init: function () {
        if (universe.constant.smallScreen) {
            return;
        }

        universe.log('Init: nebula');
        nebula.generateStars(nebula.constant.starCount);
    },

    loadTheme: function () {
        nebula.setMood(theme.nebula.mood[0], theme.nebula.mood[1]);
    },

    generateStars: function (starCount) {
        if ($('.star', universe.context.stars).size() > 1) {
            return;
        }

        universe.log('Nebula: generating ' + starCount + ' stars');
        var starsWidth = $(universe.context.stars).width();
        var starsHeight = $(universe.context.stars).height();
        var starClasses = ['distant', 'medium', 'near'];
        var i = 0;
        for (i = 0; i <= starCount; i++) {
            var starId = 'star-' + i;
            var starX = universe.entropy(0, starsWidth);
            var starY = universe.entropy(0, starsHeight);
            var starClass = starClasses[universe.entropy(1, starClasses.length) - 1];
            universe.context.stars.append('<div id="' + starId + '" class="star ' + starClass + '"></div>');
            $('#' + starId, universe.context.stars).css({
                'top': starY,
                'left': starX
            });
        }
    },

    toggleColorPicker: function () {
        $('div#color-one, div#color-two', universe.context.body).toggle();
        if ($('div#color-one', universe.context.body).size() < 1) {
            universe.context.body.append('<div id="color-one"></div><div id="color-two"></div>');
        }

        $('#color-one').ColorPicker({
            color: nebula.constant.colorOne,
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                nebula.setMood('#' + hex, nebula.constant.colorTwo);
                $('#color-one').css('background-color', nebula.constant.colorOne);
            }
        }).css('background-color', nebula.constant.colorOne);

        $('#color-two').ColorPicker({
            color: nebula.constant.colorTwo,
            onShow: function (colpkr) {
                $(colpkr).fadeIn(500);
                return false;
            },
            onHide: function (colpkr) {
                $(colpkr).fadeOut(500);
                return false;
            },
            onChange: function (hsb, hex, rgb) {
                nebula.setMood(nebula.constant.colorOne, '#' + hex);
                $('#color-two').css('background-color', nebula.constant.colorTwo);
            }
        }).css('background-color', nebula.constant.colorTwo);
    },

    setMood: function (from, to) {
        if (from && to) {
            nebula.constant.colorOne = from;
            nebula.constant.colorTwo = to;
        }

        var canvas = $('canvas', universe.context.nebula);
        if (typeof(G_vmlCanvasManager) != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas.html());
        }
        if (canvas[0].getContext) {
            var context = canvas[0].getContext("2d");
            var grd = context.createRadialGradient(120, 60, 10, 130, 65, theme.nebula.diameter);
            var width = $('canvas', universe.context.nebula).width();
            var height = $('canvas', universe.context.nebula).height();
            grd.addColorStop(0, nebula.constant.colorOne);
            grd.addColorStop(1, nebula.constant.colorTwo);
            context.fillStyle = grd;
            context.fillRect(0, 0, width, height);

        } else {
            universe.log('Nebula: no canvas support');
            $('div', universe.context.nebula).css('background-color', to);
        }
        $(universe.context.nebula).css('background-color', to);

        return;
    }
};
