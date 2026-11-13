let mover;

function setup() {
  createCanvas(400, 300);
  mover = new Mover();
}

function draw() {
  background(255);
  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.checkEdges();
  mover.update();
  mover.show();
}