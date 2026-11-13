let mover;

function setup() {
  createCanvas(400, 300);
  mover = new Mover();
}

function draw() {
  background(255);
  mover.update();
  mover.show();
}