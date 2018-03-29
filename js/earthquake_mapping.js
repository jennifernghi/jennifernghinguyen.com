var mapping;

var clat = 0;
var clong = 0;

//10.8231° N, 106.6297° E
//var lat = 10.8231;
//var long = 106.6297;

var zoomlv = 1;
var earthquakes;

var w = 1024;
var h = 500;

// https://en.wikipedia.org/wiki/Web_Mercator
function merX(zoomlv, long){
    long = radians(long);

    //mapbox system using 512x512 -> using 256 = 512/2
    var a = (256 / PI) * pow(2, zoomlv);
    var b = long + PI;
   return a * b;
}
function merY(zoomlv, lat){
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoomlv);
    var b =  tan((PI/4) + (lat/2));
    var c = PI - log(b);
    return a * c;
}

function preload(){

    mapping = loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/'+clong+','+clat+','+zoomlv+',0,0/'+w+'x'+h+'?access_token=pk.eyJ1IjoiamVubmlmZXJuZ2hpIiwiYSI6ImNqZjd6czNobDBreXY0ZW9od3lhZHNuN2EifQ.cCiKaXITQTikj17YR2-seg');
    
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
    console.log(earthquakes.length);
}
function setup(){
    createCanvas(w, h);
    //The 'width' and 'height' variables contain the width and height of the 
    //display window as defined in the createCanvas() function.
    translate(width/2, height/2)
    imageMode(CENTER);
    image(mapping, 0, 0);

    var cx = merX(zoomlv, clong);
    var cy = merY(zoomlv, clat);

    for (var i = 1; i < earthquakes.length; i++){
        //loadString gives an array of string
        //split by ,
        var data = earthquakes[i].split(/,/)
        var lat = data[1];
        var long = data[2];
        
        //mag each level is 10 time stronger than previous level
        var mag = data[4];

        mag = pow(10, mag);
        mag = sqrt(mag);

        var magMax = sqrt(pow(10,10));

        var d = map(mag, 0, magMax, 0, 300);
        //console.log('d ' + d);
        var x = merX(zoomlv, long) - cx;
        var y = merY(zoomlv, lat) - cy;

        stroke('#a00000');
        fill('#ff4949');
        tint(255, 128)
        //ellipse(x, y, 1.2*mag, 1.2*mag);
        ellipse(x, y, 7*d, 7*d);
    }
    
}

function draw(){

}