// JavaScript Document
var xoff =0;
function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(0);
	stroke(255);
	noFill();
	beginShape(); //connect all vetices
	for(var x =0; x < width; x++){
		stroke(255);
		vertex(x, noise(height) * height);
	}
	
	endShape();
	//noLoop();
}