var overlay = {
	constant: {
		timeslotHover: false
	},
	
	init: function() {
		universe.log('Init: overlay');
		
		overlay.googleBadge();
		overlay.relExternal();
		overlay.themeSwitcher();
		
		$('hgroup a').click(function(){
			if (!universe.context.overlay.hasClass('is-open')) {
				overlay.toggleTab();
				overlay.showArticle('over-mij');
			}
		});
		
		$('#unfold a', universe.context.overlay).click(function(event){
			overlay.toggleTab();
			if (universe.context.overlay.hasClass('is-open')) {
				var _hash = overlay.getHash();
				overlay.showArticle(_hash);
			}
			
			event.preventDefault();
			return false;
		});
		
		$(window).hashchange(function(event){
			var _hash = overlay.getHash();
			if (_hash == undefined || _hash === '') { return false; }
			overlay.showArticle(_hash);
			
			event.preventDefault();
			return false;
		});
		$(window).hashchange();
		
	},
	
	loadTheme: function() {
		$('a', universe.context.themeSelector).removeClass('selected');
		$('a.' + universe.context.body.data('theme'), universe.context.themeSelector).addClass('selected');
	},
	
	themeSwitcher: function() {
		if (universe.constant.iphone || universe.constant.android) { return; }
		
		$('a', universe.context.themeSelector).click(function(){
			universe.loadTheme($(this).attr('class'));
			window.clearInterval(overlay.constant.clock);
			overlay.constant.clock = false;
			return false;
		});
		
		overlay.constant.clock = setInterval(function(){
			var time = new Date();
			var hours = (time.getHours() > 9 ? time.getHours() : '0' + time.getHours());
			var minutes = (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes());
			var seperator = (time.getSeconds() % 2 === 0 ? ':' : ' ');
			if (!overlay.constant.timeslotHover) {
				$('time', universe.context.themeSelector).html(hours + '<span>' + seperator + '</span>' + minutes);
			}
		}, 1000);
		
		$('a', universe.context.themeSelector).hover(function(){
			overlay.constant.timeslotHover = true;
			$('time', universe.context.themeSelector).html($(this).data('start-time') + '<span>-</span>' + $(this).data('end-time'));
		}, function(){
			overlay.constant.timeslotHover = false;
			if (!overlay.constant.clock) {
				var themeSelected = $('a.selected', universe.context.themeSelector);
				$('time', universe.context.themeSelector).html(themeSelected.data('start-time') + '<span>-</span>' + themeSelected.data('end-time'));
			}
		});
		
	},
	
	toggleTab: function() {
		if (universe.context.overlay.is(':animated')) { return; }
		if (universe.context.overlay.hasClass('is-open')) {
			universe.context.overlay.toggleClass('is-open');
			universe.context.overlay.animate({
				height: 100
			}, {
				easing: 'linear',
				duration: 200,
				queue: false,
				step: function(now) {
					$(window).trigger('resize');
				},
				complete: function(){
					$(window).trigger('resize');
				}
			});
		} else {
			universe.context.overlay.toggleClass('is-open');
			universe.context.overlay.animate({
				height: 500
			}, {
				easing: 'linear',
				duration: 200,
				queue: false,
				step: function(now) {
					$(window).trigger('resize');
				},
				complete: function(){
					$(window).trigger('resize');
				}
			});
		}
	},
	
	showArticle: function(articleId) {
		if (articleId == undefined || articleId === '') {
			articleId = 'over-mij';
		}
		
		if (!$('article#page-' + articleId, universe.context.overlay).size()) { return; }
		
		if (!universe.context.overlay.hasClass('is-open')) { overlay.toggleTab(); }
		$('article', universe.context.overlay).hide();
		$('article#page-' + articleId, universe.context.overlay).show();
		return;
	},
	
	googleBadge: function() {
		if (universe.constant.ios) {
			// No flash on Ios
			$('a#google-badge', universe.context.overlay).css({
				textDecoration: 'line-through'
			}).click(function(){ return false; });
		} else {
			$('a#google-badge', universe.context.overlay).click(function(){
				var googleBadgeUrl = 'http://www.google.com/talk/service/badge/Start?tk=z01q6amlqov2a23bb7uknq1c78e9cnkvqdclsevou1kdkuto0sm4rrarpde4u7po9ddht0557eoo7n2t0fk5e5mi4cnf3hoe7vm34270maob44kar1jsg08vb0nj71b0u45frpqn1rhcvtj3fuhjv0imkra2vdufm5hafquol';
				window.open(googleBadgeUrl, 'chatsession', 'left=200,top=200,height=350,width=300,fullscreen=0,dependent=1,resizable=1,scrollbars=0,status=0,titlebar=0,toolbar=0', false);
				return false;
			});
			
			var updateStatus = function() {
				$.ajax({
					type: 'GET',
					url: '/google-status.php',
					cache: false,
					dataType: 'json',
					success: function(status) {
						$('a#google-badge', universe.context.overlay).removeClass().addClass(status);
						setTimeout(updateStatus, 10000);
					}
				});
			};
			updateStatus();
		}
	},
	
	relExternal: function() {
		$('a[rel^=external]').attr('target', '_blank');
		$('a[target^=_blank]:not(:has(img))').addClass('external');
	},
	
	getHash: function() {
		var _hash = window.location.hash.substr(1);
		return _hash;
	}
};
