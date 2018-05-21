var mapping;

var clat;
var clong;
var zoomlv;

var earthquakes;

var w = 1024;
var h = 700;

var address_text= "";
var lat_text="";
var long_text="";

////////////////////
var name_radio;
var lat_long_radio;
var address_input;
var lat_input;
var long_input;
var search_button;
var clear_button;
//////////////////
/*begin p5 processing  */
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
function initValues(clatV, clongV, zoomlvV){
    clat = clatV;
    clong = clongV;
    zoomlv = zoomlvV;
}
function isDefaultLink(){
    if (url.indexOf('?') == -1){
        return true;
    }else{
        return false;
    }
}
$( document ).ready(function() {  
    console.log("document ready");
    init();
    
});
function preload(){
    console.log("in preload");
    initValues(0,0,1);
    console.log("clat" + clat);
    console.log("clong" + clong);
    mapping = loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/'+clong+','+clat+','+zoomlv+',0,0/'+w+'x'+h+'?access_token=pk.eyJ1IjoiamVubmlmZXJuZ2hpIiwiYSI6ImNqZjd6czNobDBreXY0ZW9od3lhZHNuN2EifQ.cCiKaXITQTikj17YR2-seg');
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
    console.log(earthquakes.length);
}
function setup(){
    console.log("in setup");
    var canvas = createCanvas(w, h);
    canvas.parent('map_container');
    canvas.id('canvas_map');
    //The 'width' and 'height' variables contain the width and height of the 
    //display window as defined in the createCanvas() function.
    translate(width/2, height/2);
    imageMode(CENTER);
    image(mapping, 0, 0);

    var cx = merX(zoomlv, clong);
    var cy = merY(zoomlv, clat);

    for (var i = 1; i < earthquakes.length; i++){
        //loadString gives an array of string
        //split by ,
        var data = earthquakes[i].split(/,/);
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
        tint(255, 128);
        //ellipse(x, y, 1.2*mag, 1.2*mag);
        ellipse(x, y, 5*d, 5*d);
    }
    
}

/*end p5 processing  */

function getElement(){
     name_radio = document.getElementById('address_search');
     lat_long_radio = document.getElementById('long_lat_search');
     address_input = document.getElementById('address_search_field');
     lat_input = document.getElementById('lat_search_field');
     long_input = document.getElementById('long_search_field');
     search_button = document.getElementById('search');
     clear_button = document.getElementById('clear_button');
}

function init(){
    getElement();
    name_radio.checked = true;
    
    disableLatLongFields(name_radio);
    disableClearButton();
    disableSearchButton();

    nameRadioOnclick(name_radio, lat_long_radio);
    latLongRadioOnclick(lat_long_radio, name_radio);
    
    addressInputOnInput(address_input);
    latInputOnInput(lat_input);
    longInputOnInput(long_input);

    searchButtonInit(search_button);
    clearButtonInit(clear_button);
       
}

function searchButtonInit(search_button){
    search_button.onclick = function(){
        if(name_radio.checked){
            address_text = address_input.value.trim();
            console.log('add ' + address_text);
        }else if(lat_long_radio.checked){
            lat_text = lat_input.value.trim();
            long_text = long_input.value.trim();
            console.log('lat ' + lat_text + ' long ' + long_text);
            clat = lat_text;
            clong = long_text;
            zoomlv = 2;/////change it 
            var url = window.location.href;   
            console.log('url: ' + url); 
            if (url.indexOf('?') == -1){
                console.log('new url');
               url += '?clat='+clat+'&clong='+clong+'&zoomlv='+zoomlv;
            }else{
                console.log('? exits');
            }
            window.location.href = url;
            
            console.log('url: ' + url);
        }
    };
}

function clearButtonInit(clear_button){
    clear_button.onclick = function(){
        if(address_input.value.localeCompare("")!=0){
             address_input.value ="";
            
        }
        
        if(lat_input.value.localeCompare("")!=0){
            lat_input.value =""; 
       }

       if(long_input.value.localeCompare("")!=0){
            long_input.value =""; 
        }
    };
}
function disableLatLongFields(){ 
    $("#lat_search_field").addClass("disabledbutton");
    $("#long_search_field").addClass("disabledbutton");
}
function undisableLatLongFields(){ 
    $("#lat_search_field").removeClass("disabledbutton");
    $("#long_search_field").removeClass("disabledbutton");
}

function disableNameFields(){
    $("#address_search_field").addClass("disabledbutton");  
}
function undisableNameFields(){
    $("#address_search_field").removeClass("disabledbutton");  
}
function disableSearchButton(){
    $("#search").addClass("disabledbutton");
}
function undisableSearchButton(){
    $("#search").removeClass("disabledbutton");
}

function disableClearButton(){
    $("#clear_button").addClass("disabledbutton");
}
function undisableClearButton(){
    $("#clear_button").removeClass("disabledbutton");
}
function nameRadioOnclick(name_radio, lat_long_radio){
    name_radio.onclick = function(){
        lat_long_radio.checked = false;
        disableLatLongFields();
        undisableNameFields();
        disableClearButton();
        disableSearchButton();
    };
}
function latLongRadioOnclick(lat_long_radio, name_radio){
    lat_long_radio.onclick = function(){
        name_radio.checked = false;
        disableNameFields();
        undisableLatLongFields();
        disableClearButton();
        disableSearchButton();
    };
}
function addressInputOnInput(address_input){
    address_input.oninput = function() {
        if(address_input.value.localeCompare("")==0){
            disableClearButton();
            disableSearchButton();
        }else{
            undisableClearButton();
            undisableSearchButton();
        }      
    };
}

function latInputOnInput(lat_input){
    lat_input.oninput = function() {
        if(lat_input.value.localeCompare("")==0){
            disableClearButton();
            disableSearchButton();
        }else{
            undisableClearButton();
            undisableSearchButton();
        }
    };
}

function longInputOnInput(long_input){
    long_input.oninput = function() {
        if(long_input.value.localeCompare("")==0){
            long_text="";
            disableClearButton();
            disableSearchButton();
        }else{
            long_text += long_input.value.substr(-1);
            console.log('long '+ long_text); 
            undisableClearButton();
            undisableSearchButton();
        }
    };
}
