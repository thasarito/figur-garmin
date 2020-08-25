import p5 from 'p5';

export default class Stage {
  private location: p5.Vector;

  constructor(
    private p: p5,
    private x: number,
    private y: number,
    private fill: string
  ) {
    this.location = p.createVector(x, y);
  }

  update(velocity: p5.Vector): void {
    this.location.add(velocity.x, velocity.y);
  }

  display(): void {
    this.p.stroke(0);
    this.p.fill(this.fill);
    this.p.rect(this.location.x, this.location.y, 600, 600);
  }
}
