var images = [];
var randX = 0;
var randY = 0;
let bg;
let button;

function setup() {
 createCanvas(windowWidth, windowHeight);
  bg= loadImage('Images/windows95.jpg')
  background(bg);
 song = loadSound('media/popup.mp3');    
   for (var i = 0; i < 29; i++) {
  images[i] = loadImage('Images/Error' + i + '.png');
      console.log('Error' + i + '.png');
  button = createButton('Wake Up');
  button.position(windowWidth/2, windowHeight/2);
  button.mousePressed(change1);
     let col = color(192,192,192);
  button.style('background-color', col);
  
  }
}




function change1() {
  image(random(images), randX, randY);
  randX = random(0, windowWidth);
  randY = random(0, windowHeight);
  song.play();    
}