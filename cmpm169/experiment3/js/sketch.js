// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
//Square used for tiles selections and more
class Quad{
  constructor(tile_x, tile_y, tile_width, tile_height){
    this.x = tile_x;
    this.y = tile_y;
    this.w = tile_width;
    this.h = tile_height;
  }
}

//-------------------------------------------------------------------------------

let pic;

function preload() {
  video = createCapture(VIDEO);
}

//Diffract part of image and place somewhere
function diffract(Tile, Src, Dest){
  /*
  -----------
  | Q1 | Q2 |
  |----+----|  
  | Q3 | Q4 |
  -----------
  */
  let origin_x = Tile.x, origin_y = Tile.y;
  //Q1
  push()
    translate(origin_x, origin_y);
    image(video, Dest.x, Dest.y, Dest.w, Dest.h, Src.x, Src.y, Src.w, Src.h, COVER);
  pop()
  
  //Q2
  push();
    translate(origin_x + Tile.w, origin_y);
    scale(-1, 1);
    image(video, Dest.x, Dest.y, Dest.w, Dest.h, Src.x, Src.y, Src.w, Src.h, COVER);
  pop();
  
  //Q3
  push();
    translate(origin_x, origin_y + Tile.h);
    scale(1, -1);
    image(video, Dest.x, Dest.y, Dest.w, Dest.h, Src.x, Src.y, Src.w, Src.h, COVER);
  pop();
  
  //Q4
  push();
    translate(origin_x + Tile.w, origin_y + Tile.h);
    scale(-1, -1);
    image(video, Dest.x, Dest.y, Dest.w, Dest.h, Src.x, Src.y, Src.w, Src.h, COVER);
  pop();
}


function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(800, 600);
  canvas.parent("canvas-container");
  // // resize canvas if the page is resized
  // $(window).resize(function() {
  //   resizeScreen();
  // });
  // resizeScreen();

  background(0);
  //Tile is bounds, tile is culminaton of everything
  Tile = new Quad(0,0, 20, 20)
  // Organizing p5js image parameters -- slices should be half of tile with
  Source = new Quad(0,0, 10, 10)
  //Maybe dont need destination parameters since its given they are half of tile
  Destination = new Quad(0, 0, 10, 10)
  video.size(800, 600);
  video.hide();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  for(let i=0; i < 800; i += Tile.w){
    for(let j=0; j < 600; j += Tile.h){
        diffract(Tile, Source, Destination);
        Tile.y = j;
        Source.y = j;
    }
    Tile.x = i;
    Source.x = i;
  }
}

