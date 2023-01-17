let w = 640;
let h = 360;

var canvas;
let fr= 24;

function setup() {
 let canvas = createCanvas(w, h);
    canvas.parent("sketch-parent");
  frameRate(fr);
  pixelDensity(10);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  capture.position(CENTER);
  
    
  
}

function draw() {
  background(0,0,0);
  let stepSize = 10;
  capture.loadPixels();

  
  for(let y = 0; y < capture.height; y+= stepSize) {
    for(let x = 0; x < capture.width; x+= stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      
      
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/1.5;
      
      var threshold = 255;
      fill(0);
     if(brightness > threshold ) {
 
      stroke(127.5)
      fill(255)
      text('I AM', x, y);
      textAlign(CENTER);
     } 
     
      
     map(brightness, 0, 255, stepSize/4, stepSize*4);
      
        
          

      
   
    }
  }
  capture.updatePixels();
  

}