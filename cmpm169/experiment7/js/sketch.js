let table;
let dates = []; let months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let Dates = [];

let b = 3; let size = 9; let scl = 1.3;
let colorPalette = ["#0794cd", "#35d528", "#fee712", "#ffac49", "#ff6f7d", "#fd40a9"];


function preload() {
  table = loadTable('holidays.csv', 'csv', 'header');
}

function setup() {

  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(450, 450);
  canvas.parent("canvas-container");
  // // resize canvas if the page is resized
  // $(window).resize(function() {
  //   resizeScreen();
  // });
  // resizeScreen();
  
  for (let i=0; i<months.length; i++) {
    for (let j=0; j<months[i]; j++) {
      dates.push({month: i+1, date: j+1});
    }
  }
  
  for (let row=0; row<table.getRowCount(); row++) {
    let Month = table.getNum(row, 'month');
    let Date = table.getNum(row, 'date');
    let didIRun = (element) => element.month == Month && element.date == Date;
    let index = dates.findIndex(didIRun);
    if(index != -1) {
      Dates.push(index);
    }
    
  }

}

function draw() {
  background("#fffff")
  translate(width / 2, height / 2);
  noStroke();
  
  for (let i = 0; i < Dates.length; i++) {
    let val = Dates[i];
    let angle = sqrt(val) * b + random(-mouseX * 0.01, mouseX * 0.01);
    let r = b * angle + random(-mouseY * 0.02, mouseY * 0.02);
    let x = r * cos(angle);
    let y = r * sin(angle);
    
    fill(random(colorPalette));
    ellipse(x, y, size * scl, size * scl);
  }

  textAlign(CENTER, CENTER);
  textSize(size);
  fill(0);
  
  for (let i = 0; i < dates.length; i++) {
    let angle = sqrt(i) * b + random(-mouseX * 0.01, mouseX * 0.01);
    let r = b * angle + random(-mouseY * 0.02, mouseY * 0.02);
    let x = r * cos(angle);
    let y = r * sin(angle);
    

    
    push();
    translate(x, y);
    if (i != 0) {
      rotate(angle + PI / 2);
    }
    
    text(dates[i].date, 0, 0);
    pop();
  }
}