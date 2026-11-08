let y = 30;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  y = y + 1;
  circle(200, y, 40);
}
