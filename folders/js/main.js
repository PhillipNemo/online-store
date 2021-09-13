$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

});


let images = [];
images[0] = 'images/thumbs/01.png';
images[1] = 'images/thumbs/02.png';
images[2] = 'images/thumbs/03.png';
images[3] = 'images/thumbs/04.png';
images[4] = 'images/thumbs/05.png';
images[5] = 'images/thumbs/06.png';
images[6] = 'images/thumbs/07.png';
images[7] = 'images/thumbs/08.png';
images[8] = 'images/thumbs/09.png';


let i = 0;
function imageChange(){
	document.slide.src = images[i];
	if (i < images.length-1){
		i++
	}else{
		i = 0;
	}
}
setInterval(imageChange,3000)

