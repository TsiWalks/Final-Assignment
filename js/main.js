jQuery(document).ready(function($) {
	$('.shopnowbutton, .addtocart, .signupbutton').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).css('background-color', 'black');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).css('background-color', '#1abc9c');
	});

	// $('.slider').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
	// 	$(this).slideUp('slow')
	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	$(this).slideDown('slow')
	// });

	$('ul li').hover(function() {
		$(this).toggleClass('navhover');
	});



});