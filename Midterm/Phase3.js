function setup() {
  createCanvas(400, 400); 
  noStroke(); 
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(0); 
  triangle(20, 60, 40, 30, 60, 60); 
  triangle(90, 60, 110, 30, 130, 60);
  triangle(60, 70, 90, 70, 77, 92);
  triangle(30, 130, 30, 100, 45, 115);
  triangle(60, 130, 60, 100, 45, 115);
  triangle(60, 130, 60, 100, 75, 115);
  triangle(75, 115, 90, 100, 90, 130);
  triangle(90, 130, 90, 100, 105, 115);
  triangle(105, 115, 120, 100, 120, 130); 
  pop();
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 200, 1);
}