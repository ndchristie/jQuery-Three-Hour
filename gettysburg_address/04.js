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
$(document).on('click', 'h2', function(){
	$(this).animate({
		'opacity':0.25,
		'left':'20px',
	}, 1000, function(){
		$('.speech p').animate({
			'opacity':0.5,
		});
	});
});
//Done

//Ass.:Make the style switcher work.
$(document).on('click', '#switcher-default', function(){
	$('html').css({'font-size':''});//16px
}).on('click', '#switcher-large', function(){
	$('html').css({'font-size':'+=2px'});
}).on('click', '#switcher-small', function(){
	$('html').css({'font-size':'-=2px'});
});
//Done

//Ass.:Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
$(document).on('keyup', function(ev){
	var key = ev.keyCode || ev.which;
	console.log(key);
	if(37 <= key && key <= 40){
		console.log(key);
		if(key == 37){//left
			move = [-20,0];
		} else if(key == 38){//up
			move = [0,-20];
		} else if(key == 39){//right
			move = [20,0];
		} else {//down
			move = [0,20];
		}
		$('#switcher').animate({
			'left':'+='+move[0]+'px',
			'top':'+='+move[1]+'px',
		},250);
	}
});
//Done