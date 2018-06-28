$(document).ready(function () {
	'use strict';
    fadeOnScrollTop(".home_div");
    //typedjs();
        
});

//effect on scroll
function fadeOnScrollTop(div_id) {
	'use strict';
    $(window).scroll(function () {
        $(div_id).css("opacity", 1 - $(window).scrollTop() / $(window).height());
    });

}
/*
function typedjs(){
    var typed2 = new Typed('#name', {
        strings: ['Nghi {Jennifer} M. Nguyen'],
        typeSpeed: 70,
        backSpeed: 100,
        cursorChar: '',
        smartBackspace: true,
        loop: true
      });
}*/