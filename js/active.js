(function ($) {
	"use strict";
	// css preloader 
	$(window).on('load', function () {
		$("#loading").fadeOut(500);
	});
	// counter js activation 
	jQuery(document).ready(function ($) {
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});
	// mixitup js activation 
	var mixer = mixitup('.gallery');
	// owl-carousel for brand area 
	$('.brands-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 6,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 2
			},
			426: {
				items: 3,
			},
			768: {
				items: 6
			}

		}
	})
	// owl-carousel for testimonial area 
	$('.testimonial-client-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
		dots: true,
		center: true,
	})
	// owlCarousel for member area
	$('.member-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
		dots: true,
	})
	// bar-filler js activation 
	$(document).ready(function () {
		$('#bar1').barfiller();
		$('#bar2').barfiller();
		$('#bar3').barfiller();
		$('#bar4').barfiller();
	});
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
})(jQuery);