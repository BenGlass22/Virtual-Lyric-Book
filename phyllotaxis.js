var n = 0;
var c = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
 // colorMode(HSB);
  //blendMode(OVERLAY);    
  background(0); 
}

function draw() {
  var a = n * 63.75;
  var r = c * sqrt(n);
  var x = r * cos(a) + width/2 - 35;
  var y = r * sin(a) + height/2;
  let words =['I','Am','Begining','To','Become','Becoming'];
  let word = random(words);
  //noFill();
  //stroke(n % 255, 255, 255,10);
  fill(0,255,51) 

  //stroke(0);
  
  text(word,x,y);
  textAlign(CENTER);
  textFont('monospace',8);      
  n++;
}