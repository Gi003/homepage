// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var centerHorz, centerVert;

let grid = []; // Array to store grid squares
let cols = 2;  // Initial number of columns
let rows = 2;  // Initial number of rows
let gridSize = 400; // Canvas/grid size in pixels

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

// setup() function is called once when the program starts
function setup() {
  createCanvas(gridSize, gridSize);
  grid = initializeGrid(0, 0, gridSize, gridSize, cols, rows);
  print(grid);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  background(220);
  for (let cell of grid) {
    cell.show();
  }

}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
  for (let index = grid.length - 1; index >= 0; index--){
    cell = grid[index];
    if (cell.contains(mouseX, mouseY)) {
      addCell(cell,cols,rows);
      print(grid);
      break;
    }
  }
}