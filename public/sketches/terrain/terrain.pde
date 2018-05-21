int cols, rows;

int scl = 5;


int w= 2000;
int h = 1000;
float flying =0;
float[][] terrain; 
PImage img;
// PImage bg;
void setup(){
   size(1000, 800, P3D); 
   
    cols = w/scl;
    rows = h/scl;
    terrain = new float[cols][rows];
     img = loadImage("ocean.jpg");
   // bg= loadImage("background.jpg");

    
}

void draw(){
 // background(bg);
 /* flying -= 0.02;
  
    float yoff= flying;
    for(int y =0; y < rows; y++){
      float xoff=0;
      for(int x =0; x < cols; x++){
        terrain[x][y] = map(noise(xoff,yoff),0,1,-70,70);
        xoff +=0.1;
      }
      yoff +=0.1;
      
    }
   background(5,8,8); 
    //stroke(255);
   stroke(255);
    fill(87, 146, 237);

    
     translate(width/3, height/3);
     rotateX(PI/3);
     
     translate(-w/2, -h/2);
   
   for(int y =0; y < rows-1; y++){
       beginShape(TRIANGLE_STRIP);
      for(int x =0; x < cols; x++){
        texture(img);
         vertex(x*scl, y*scl, terrain[x][y]);
         vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
         
      }
      endShape();
   }*/
   
    background(5,8,8); 
    stroke(56, 184, 234);
    fill(98, 209, 252);

    translate(width/2, height/2);
     rotateX(PI/4);
     translate(-w/2, -h/2);

    for(int y =0; y < rows-1; y+=1){
       beginShape(TRIANGLE_STRIP);
    
       for(int x =0; x < cols; x+=1){
          vertex(x*scl, y*scl, random(-2,3));
          
          
       }
       endShape();
    }
}