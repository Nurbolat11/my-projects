"use strict"

function Scroll(id) {
		let a=$(id).offset().top-65				
		
		$('html,body').animate({scrollTop:a},1000)
	}


let left = 0;
function sliderLeft() {
	let a = document.getElementById('slider');

	left = left - 337;
	if(left < -2022) {
		left = 0;		
	}
	a.style.left = left + 'px';
	//console.log(a);
}

function sliderRight() {
	let b = document.getElementById('slider');
	
	left = left + 337;

	if(left > 0) {
		left = -2022;		
	}

	b.style.left = left + 'px';
}