import p5 from 'p5';

export default class footstep {
  private location: p5.Vector;
  private velocity: p5.Vector;

  constructor(private p: p5, x: number, y: number) {
    this.location = p.createVector(x, y);
    this.velocity = p.createVector(2, -2);
  }

  update(): void {
    this.location.add(this.velocity);
  }

  display(): void {
    this.p.stroke(0);
    this.p.fill('#fff');
    this.p.ellipse(this.location.x, this.location.y, 16, 16);
  }
}
