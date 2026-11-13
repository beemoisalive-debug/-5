let moverA, moverB;

function setup() {
  createCanvas(400, 300);
  moverA = new Mover(100, 30, 4);
  moverB = new Mover(300, 30, 1);
}

function draw() {
  background(255);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.checkEdges();
  moverA.update();
  moverA.show();

  moverB.checkEdges();
  moverB.update();
  moverB.show();
}