$(document).ready(function(){
	//open menu
	$('.intro-menu-trigger').on('click', function(event){
		event.preventDefault();
		$('#intro-main-content').addClass('move-out');
		$('#main-nav').addClass('is-visible');
		$('.intro-shadow-layer').addClass('is-visible');
	});
	//close menu
	$('.intro-close-menu').on('click', function(event){
		event.preventDefault();
		$('#intro-main-content').removeClass('move-out');
		$('#main-nav').removeClass('is-visible');
		$('.intro-shadow-layer').removeClass('is-visible');
	});

	//clipped image - blur effect
	set_clip_property();
	$(window).on('resize', function(){
		set_clip_property();
	});

	function set_clip_property() {
		var $header_height = $('.intro-header').height(),
			$window_height = $(window).height(),
			$header_top = $window_height - $header_height,
			$window_width = $(window).width();
		$('.intro-blurred-bg').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
	}
});