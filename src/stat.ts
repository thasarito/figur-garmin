import p5 from 'p5';

export default class Stat {
  private location: p5.Vector;

  constructor(
    private p: p5,
    x: number,
    y: number,
    private attribute: string,
    private value: number | string
  ) {
    this.location = p.createVector(x, y);
  }

  update(location: p5.Vector): void {
    this.location.set(location);
  }

  display(): void {
    this.p.fill('white');
    this.p.textSize(40);
    this.p.textAlign('center');
    this.p.text(
      this.attribute,
      this.location.x + this.p.width / 2,
      this.location.y + this.p.height / 2
    );
    this.p.text(
      this.value,
      this.location.x + this.p.width / 2,
      this.location.y + this.p.height / 2 + 100
    );
  }
}
