$(document).ready(function () {
	'use strict';
    fadeOnScrollTop(".home_div");
    typedjs();
        
});

//effect on scroll
function fadeOnScrollTop(div_id) {
	'use strict';
    $(window).scroll(function () {
        $(div_id).css("opacity", 1 - $(window).scrollTop() / $(window).height());
    });

}

function typedjs(){
    var typed2 = new Typed('#name', {
        strings: ['I am a computer science student. Welcome to my portfolio website.', 'Scroll down to view my resume and my portfolio'],
        typeSpeed: 50,
        backSpeed: 40,
        cursorChar: '|',
        smartBackspace: true,
        loop: true
      });
}