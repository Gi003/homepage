// sketch.js - p5js template 
// Author: Gio Iraheta
// Date: 2-8-2025
//-------------------------------------------------------------------------------

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

// Initiallize
// function setup() {
//   // place our canvas, making it fit our container
//   canvasContainer = $("#canvas-container");
//   let canvas = createCanvas(800, 600);
//   canvas.parent("canvas-container");
//   // // resize canvas if the page is resized
//   // $(window).resize(function() {
//   //   resizeScreen();
//   // });
//   // resizeScreen();

// }

//Main animation loop
function draw() {}

