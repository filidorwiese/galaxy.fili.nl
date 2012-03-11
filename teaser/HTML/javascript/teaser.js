
var teaser = {
	constant: {
		spriteIterator: -1
	},
	
	init: function() {
		teaser.spriteFiliArthur();
	},
	
	spriteFiliArthur: function() {
		$('#teaser div').spriteAnimator({
			url: '/images/pxlfili_enarthurgroter.png',
			run: 0,
			delay: 100,
			cols: 11,
			rows: 1
		});
	}
};


if (typeof window.jQuery != 'undefined') {
	$(document).ready(function() {
		teaser.init();
	});
}
