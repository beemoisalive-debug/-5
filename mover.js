class Mover {
  constructor() {
    this.position = createVector(200, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0.1);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  show() {
    circle(this.position.x, this.position.y, 40);
  }
}