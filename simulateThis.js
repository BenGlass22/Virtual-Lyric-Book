var brushSize = 1;
var randX= 0;
var randY= 0;
var randR= 0;
var randG= 0;
var randB= 0;
let osc, playing, freq, amp;

function setup() {
background(0);
  let cnv = createCanvas(windowWidth, windowHeight);
  blendMode(OVERLAY);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sawtooth');
  //osc = new p5.Oscillator('sine');
  //osc = new p5.Oscillator('square');
}

function draw() {
  stroke(0, 0, 255);
  strokeWeight(0);
  fill(255, 204, 0);
  
  
  randR= random(0,255);
  randG= random(0,255);
  randB = random(0, 255);
  
  fill(randR, randG, randB);
  
  
  
  if(mouseIsPressed)
  {
  text("Simulate This",mouseX,mouseY);
    textSize(brushSize);
  brushSize= brushSize + 1;
    textAlign(CENTER)
  }
  else
  {
    brushSize = 1;
  }
 
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  
  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {

  osc.start();
  playing = true;
}

function mouseReleased() {

  osc.amp(0, 0.5);
  playing = false;
 
}