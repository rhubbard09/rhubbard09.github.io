// JavaScript Document


$(document).ready(function () {
	// deals with resizing and changing divs for video
	$('.whatwedo').mouseenter(function() {
		$(this).css('font-size', '105%');
	})
	$('.whatwedo').mouseleave(function() {
		$(this).css('font-size', '100%');
	})
	
	$('.wedovideo').hide(0);
	
	$('.whatwedo').click(function () {
		$(this).fadeOut(0);
		$('.wedovideo').fadeIn(400);
		$(window).scrollTop($('.wedovideo').offset().top);
		$('.footerA').addClass('footerB').removeClass('footerA');
	})
	
	$('.wedovideo').click(function () {
		$(this).fadeOut(0);
		$('.whatwedo').fadeIn(400);
		$('.footerB').addClass('footerA').removeClass('footerB');
	})

})

