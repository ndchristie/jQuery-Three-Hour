/* 04.js */

//Ass.:Download the exercise files here.
//Done

//Ass.:Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
$(window).on('load', function(){
	$('body').fadeIn(800);
});
//Done

//Ass.:Give each paragraph a yellow background only when the mouse is over it.
$(document).on('mouseenter', 'p', function(){
	$(this).css({'background-color':'#FE8'});
}).on('mouseleave', 'p', function(){
	$(this).css({'background-color':''});
});
//Done

//Ass.:Make a click of the title (<h2>) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
//Ass.:Make the style switcher work.
//Ass.:Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).