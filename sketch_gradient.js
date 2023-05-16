var bkgdColor, foreColor;
var colorA = [];

var mainGrid = [];
var ripples = [];

function preload(){

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bkgdColor = color('#000000');
  foreColor = color('#ffffff');  
  // colorA[0] = color('#2955d9');
  // colorA[1] = color('#2793f2');
  // colorA[2] = color('#f23e2e');
  // colorA[3] = color('#f2c12e');

  colorA[0] = color('#4541bf');
  colorA[1] = color('#d971c7');
  colorA[2] = color('#f29f05');
  colorA[3] = color('#f2ebdc');

  noSmooth();

  mainGrid = new TriGrid();
}

function draw(){
  background(bkgdColor);

  for(var p = 0; p < ripples.length; p++){
    ripples[p].update();
  }

  mainGrid.update();
  mainGrid.display();

  fill(foreColor);
  noStroke();
  text(ripples.length, width - 100, height-100);
  text(round(frameRate()), width - 100, height-70);
}

function mouseClicked(){
  ripples[ripples.length] = new Ripple(mouseX, mouseY);
}