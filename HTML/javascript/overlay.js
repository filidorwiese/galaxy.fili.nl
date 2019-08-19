var overlay = {
    constant: {
        timeslotHover: false
    },

    init: function () {
        universe.log('Init: overlay');

        overlay.googleBadge();
        overlay.relExternal();
        overlay.themeSwitcher();
        overlay.languageSwitcher();

        $('hgroup a').on('click', function () {
            if (!universe.context.overlay.hasClass('is-open')) {
                overlay.toggleTab();
                overlay.showArticle('over-mij');
            }
        });

        $('#unfold a', universe.context.overlay).on('click', function (event) {
            overlay.toggleTab();
            if (universe.context.overlay.hasClass('is-open')) {
                var _hash = overlay.getHash();
                overlay.showArticle(_hash);
            }

            event.preventDefault();
            return false;
        });

        // slide & fade in
        setTimeout(function () {
            universe.context.overlay.animate({
                top: 0
            }, {
                easing: 'linear',
                duration: 500,
                queue: false,
                complete: function () {
                    $('#designer-credit, #awwwards, #theme-selector').fadeIn(1000);
                }
            });
        }, 500);

        $(window).hashchange(function (event) {
            var _hash = overlay.getHash();
            if (_hash == undefined || _hash === '') {
                return false;
            }
            overlay.showArticle(_hash);

            event.preventDefault();
            return false;
        });
        $(window).hashchange();

    },

    loadTheme: function () {
        $('a', universe.context.themeSelector).removeClass('selected');
        $('a[data-theme=' + universe.context.body.data('theme') + ']', universe.context.themeSelector).addClass('selected');
    },

    themeSwitcher: function () {
        if (universe.constant.smallScreen) {
            return;
        }

        $('a', universe.context.themeSelector).on('click', function () {
            universe.loadTheme($(this).data('theme'));
            window.clearInterval(overlay.constant.clock);
            overlay.constant.clock = false;
            return false;
        });

        overlay.constant.clock = setInterval(function () {
            var time = new Date();
            var hours = (time.getHours() > 9 ? time.getHours() : '0' + time.getHours());
            var minutes = (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes());
            var seperator = (time.getSeconds() % 2 === 0 ? ':' : ' ');
            if (!overlay.constant.timeslotHover) {
                $('time', universe.context.themeSelector).html(hours + '<span>' + seperator + '</span>' + minutes);
            }
        }, 1000);

        $('a', universe.context.themeSelector).hover(function () {
            overlay.constant.timeslotHover = true;
            $('time', universe.context.themeSelector).html($(this).data('start-time') + '<span>-</span>' + $(this).data('end-time'));
        }, function () {
            overlay.constant.timeslotHover = false;
            if (!overlay.constant.clock) {
                var themeSelected = $('a.selected', universe.context.themeSelector);
                $('time', universe.context.themeSelector).html(themeSelected.data('start-time') + '<span>-</span>' + themeSelected.data('end-time'));
            }
        });
    },

    languageSwitcher: function () {
        $('a', universe.context.languageSelector).on('click', function (event) {
            event.preventDefault();
            var _language = $(this).data('language');
            if (!$('html').hasClass(_language)) {
                $('html').removeClass('nl en').addClass(_language);
                $.cookie('language', _language);
            }
        });

        // Language detection
        var _langInBrowser = window.navigator.userLanguage || window.navigator.language;
        var _langInCookie = $.cookie('language');
        var _language = _langInCookie || (_langInBrowser.substr(0, 2) == 'nl' ? 'nl' : 'en');
        $('a[data-language=' + _language + ']', universe.context.languageSelector).trigger('click');
    },

    toggleTab: function () {
        if (universe.context.overlay.hasClass('is-open')) {
            universe.context.overlay.toggleClass('is-open');
            document.location = '#';
            universe.context.overlay.animate({
                height: 100
            }, {
                easing: 'linear',
                duration: 200,
                queue: false,
                step: function (now) {
                    $(window).trigger('resize');
                },
                complete: function () {
                    $(window).trigger('resize');
                }
            });
        } else {
            universe.context.overlay.toggleClass('is-open');
            universe.context.overlay.animate({
                height: 440
            }, {
                easing: 'linear',
                duration: 200,
                queue: false,
                step: function (now) {
                    $(window).trigger('resize');
                },
                complete: function () {
                    $(window).trigger('resize');
                }
            });
        }
    },

    showArticle: function (articleId) {
        if (articleId == undefined || articleId === '') {
            articleId = 'over-mij';
            document.location = '#' + articleId;
        }

        if (!$('article#page-' + articleId, universe.context.overlay).size()) {
            return;
        }

        if (!universe.context.overlay.hasClass('is-open')) {
            overlay.toggleTab();
        }
        $('article', universe.context.overlay).hide();
        $('article#page-' + articleId, universe.context.overlay).show();
        return;
    },

    googleBadge: function () {
        var updateStatus = function () {
            $.ajax({
                type: 'GET',
                url: '/google-status.json?' + new Date().getTime(),
                cache: false,
                dataType: 'json',
                success: function (state) {
                    var _html = '<span class="nl">' + state.nl + '</span><span class="en">' + state.en + '</span>';
                    $('#google-badge', universe.context.overlay).removeClass().addClass('is-' + state.state).html(_html);
                    //setTimeout(updateStatus, 60000);
                }
            });
        };
        updateStatus();
    },

    relExternal: function () {
        $('a[rel^=external]').attr('target', '_blank');
        $('a[target^=_blank]:not(:has(img))').addClass('external');
    },

    getHash: function () {
        var _hash = window.location.hash.substr(1);
        return _hash;
    }
};
