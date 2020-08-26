import p5 from 'p5';

import Stat from './stat';

export default class Stage {
  private location: p5.Vector;
  private stats: Stat[] = [];

  constructor(private p: p5, x: number, y: number, private fill: string) {
    this.location = p.createVector(x, y);
  }

  update(location: p5.Vector): void {
    this.location.set(location);
    this.stats.forEach((stat) => stat.update(location));
  }

  addStat(attribute: string, value: string | number): void {
    const stat = new Stat(
      this.p,
      this.location.x,
      this.location.y,
      attribute,
      value
    );
    this.stats.push(stat);
  }

  display(): void {
    this.p.stroke(0);
    this.p.fill(this.fill);
    this.p.rect(this.location.x, this.location.y, 600, 600);
    this.stats.forEach((stat) => stat.display());
  }
}
