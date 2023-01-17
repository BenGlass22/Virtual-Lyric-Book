var n = 0;
var c = 4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  //blendMode(OVERLAY);    
  background(0);
  
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);
  var x = r * cos(a) + width/2 - 35;
  var y = r * sin(a) + height/2;
  let words = ['I','Am','Begining','To','Become','Becoming'];
  let word = random(words);
  noFill();
  stroke(n % 255, 255, 255,10);
  text(word,x,y);
  textAlign(CENTER)
  n++;
}