$(document).ready(function() {
//    $('.dropdown').hover(function(){
//        $(this).children().toggle();  
////        alert('click');
//    });
    
    
    
//    $('.hamburger').click(function() {
//        $('.hamburger_toggle').toggleClass();  
//        
//    });
    
        $('.hamburger').click(function() {
        $('.classtoggle').slideToggle('hamburger_toggle');  
        
    });
    
        $('.inactive').click(function() {
            $(this).toggleClass("active");
            alert('click');
    });
    
    $(".zoom_01").hover(function() {
    $(".zoom_01").elevateZoom();
        alert('jerk');
    });
    
    $('.faq h3').click(function() {
        $(this).next().toggleClass('active');
    });
    
 
    
//Replaced this with CSS hover functions. 
//	$('.shopnowbutton, .addtocart, .signupbutton').hover(function() {
//		/* Stuff to do when the mouse enters the element */
//		$(this).css('background-color', 'black');
//	}, function() {
//		/* Stuff to do when the mouse leaves the element */
//		$(this).css('background-color', '#1abc9c');
//	});

	// $('.slider').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
	// 	$(this).slideUp('slow')
	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	$(this).slideDown('slow')
	// });

	// $('ul li').hover(function() {
	// 	$(this).toggleClass('navhover');
	// });



});

