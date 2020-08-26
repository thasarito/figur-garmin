import p5 from 'p5';

import activities from './activities';
import Stage from './stage';
import easeInOutElastic from './easeInQuad';

function sketch(p) {
  let stages = [];
  let n = 0;

  p.setup = function () {
    p.createCanvas(600, 600);

    Object.entries(activities).forEach(([attribute, value], i) => {
      const stage = new Stage(p, i * p.width, 0, '#dd5034');
      stage.addStat(attribute, value);
      stages.push(stage);
    });
  };

  p.draw = function () {
    p.background('#121212');
    const second = 5,
      t = (p.frameCount % (60 * second)) / (60 * second),
      x = easeInOutElastic(t) * -p.width - n * p.width;
    console.log(t);

    if (t === 0) {
      n++;
    }

    stages.forEach((stage, i) => {
      const location = p.createVector(x + i * p.width, 0);
      stage.update(location);
      stage.display();
    });
  };
}

const container = document.getElementById('canvas');
new p5(sketch, container);
