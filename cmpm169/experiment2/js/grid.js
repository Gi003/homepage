// Cell class representing a grid square
class Cell {
    constructor(x, y, w, h, z = 0) {
      this.x = x;  //Location
      this.y = y;  //|
      this.z = z;  //|
      this.w = w;  //width
      this.h = h;  //height
      this.c = 200;//color
    }
    
    // Check if a point is inside this cell
    contains(point_x, point_y) {
      return point_x > this.x &&
             point_x < this.x + this.w &&
             point_y > this.y && 
             point_y < this.y + this.h;
    }
  
    // Draw the cell
    show() {
      stroke(0);
      fill(this.c);
      rect(this.x, this.y, this.w, this.h);
    }
    
    //Change shade of cell
    change_color(val) {
      this.c = val
    } 
  }
  //------------------------------------------------------------------------
  
  // Initialize the grid as an array of cells in columns and rows
  function initializeGrid(x, y, width_, height_, cols, rows) {
    let cell_array = [];
    let cellWidth = width_ / cols;
    let cellHeight = height_ / rows;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let cell = new Cell(x + (i * cellWidth), //Location on x
                            y + j * cellHeight,  //Location on y
                            cellWidth,           //w
                            cellHeight);         //h
        cell_array.push(cell);
      }
    }
    return cell_array;
  }
  
  //Split cell into more cells
  function splitCell(cell, cols, rows) {
    let newCells = initializeGrid(cell.x, cell.y, cell.w, cell.h, cols, rows);
    // Replace the clicked cell with its new sub-cells
    grid = grid.filter(entry => entry !== cell);
    grid = grid.concat(newCells);
    
  }
  
  //Add cells, where cursor is placed, within bounds of grid rules.
  function addCell(cell, cols, rows) {
    let newCells = initializeGrid(cell.x, cell.y, cell.w, cell.h, cols, rows);
    newCells = newCells.filter(entry =>   entry.contains(mouseX,mouseY));
    [newCell] = newCells;
    newCell.z = cell.z + 1;
    // Replace the clicked cell with its new sub-cells
    //grid = grid.filter(entry => entry !== cell);
    grid.push(newCell)  
    
  }