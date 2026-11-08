class Mover {
  constructor() {
    this.position = createVector(200, 30);
    this.velocity = createVector(0, 1);
  }

  update() {
    this.position.add(this.velocity);
  }

  show() {
    circle(this.position.x, this.position.y, 40);
  }
}
