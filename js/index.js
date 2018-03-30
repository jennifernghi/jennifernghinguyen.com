$(document).ready(function () {
	'use strict';
    //changeHasTags();
    //changeNameStyle();
    fadeOnScrollTop(".home_div");
    typedjs();
        
});

function updateText(container, text) {
	'use strict';
    container.innerHTML = text;
}
function changeNameStyle() {
    'use strict';
    var name_container = document.getElementById("name");
    var name_display = name_container.innerHTML;
    var i = -1;
    var names = ["Jennifer Nghi Nguyen"];
    var name = "";
    var mode = "write";
    var delay = 2000;


    function changeName() {


        if (name_container.innerHTML.length == 0) {
            i++;
            if(i==0){
                name_container.style.fontFamily="Petit Formal Script, cursive";
            }
            console.log("i", i);
            name = names[i];
            name_display = "";
            mode = "write";
        }

        if (i == names.length - 1) {
            i = -1;
        }


        switch (mode) {
            case "write":
                name_display += name.slice(0, 1);
                name = name.substr(1);

                updateText(name_container, name_display);

                if (name.length === 0 && i === names.length - 1) {
                    window.clearTimeout(timeout);
                    return;
                }

                if (name.length == 0) {
                    mode = "delete";
                    delay = 2000;
                } else {
                    delay = 32 + Math.round(Math.random() * 40);
                }

                break;

            case "delete":
                name_display = name_display.slice(0, -1);
                updateText(name_container, name_display);

                if (name_display.length == 0) {
                    mode = "write";
                    delay = 2000;
                } else {
                    delay = 32 + Math.round(Math.random() * 100);
                }
                break;
        }

        timeout = window.setTimeout(changeName, delay);
    }

    //effect on name
    window.setTimeout(changeName, delay);

}

//effects on hastags

function changeHasTags() {
	'use strict';
    var hastag_container = document.getElementById("greeting_hastags");
    var hastag_display = hastag_container.innerHTML;
    var j = -1;
    var hastags = ["#SJSUClassOf2018", "#ComputerScience", "#SoftwareEngineer", "#LookingForInternShip2018", "#LookingForFullTimeEmployment2019"];
    var hastag = "";
    var mode = "write";
    var delay = 800;


    function changeHasTag() {


        if (hastag_container.innerHTML.length == 0) {
            j++;        
            hastag = hastags[j];
            hastag_display = "";
            mode = "write";
        }

        if (j == hastags.length - 1) {
            j = -1;
        }


        switch (mode) {
            case "write":
                hastag_display += hastag.slice(0, 1);
                hastag = hastag.substr(1);

                updateText(hastag_container, hastag_display);

                if (hastag.length === 0 && j === hastags.length - 1) {
                    window.clearTimeout(timeout);
                    return;
                }

                if (hastag.length == 0) {
                    mode = "delete";
                    delay = 800;
                } else {
                    delay = 32 + Math.round(Math.random() * 40);
                }

                break;

            case "delete":
                hastag_display = hastag_display.slice(0, -1);
                updateText(hastag_container, hastag_display);

                if (hastag_display.length == 0) {
                    mode = "write";
                    delay = 800;
                } else {
                    delay = 32 + Math.round(Math.random() * 100);
                }
                break;
        }

        timeout = window.setTimeout(changeHasTag, delay);
    }

    //effect on name
    window.setTimeout(changeHasTag, delay);

}

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