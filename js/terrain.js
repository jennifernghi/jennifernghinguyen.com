var cols = 0;
var rows = 0;
var scl = 10;
var w = 4000;
var h = 700;
var cwidth = 0;
var cheight = 0;
var z;
var flying;
$(document).ready(function () {
	'use strict';
     cwidth = document.getElementById('canvas_animation').offsetWidth;
     cheight = document.getElementById('canvas_animation').offsetHeight;
});

function setup(){
   var c = createCanvas(cwidth, cheight, WEBGL);
   c.parent('canvas_animation');
    cols = w/scl;
    rows = h/scl;
   
   
}

function draw(){

    background(5,8,8); 
    stroke(56, 184, 234);
    fill(98, 209, 252);

    translate(width/2, height/2);
     rotateX(PI/4);
     translate(-w/2, -h/2);

    for(var y =0; y < rows-1; y++){
       beginShape(TRIANGLE_STRIP);
    
       for(var x =0; x < cols; x++){
          vertex(x*scl, y*scl, random(-4,4));
          
          
       }
       endShape();
    }
    
}

function make2Darray(cols, rows){
    var arr = new Array(cols);
    for(var i =0; i<arr.length; i++){
        arr[i] = new Array(rows);
    }

    return arr;
}