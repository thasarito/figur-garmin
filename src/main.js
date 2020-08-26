import p5 from 'p5';

import palette from 'nice-color-palettes';

import activities from './activities';
import Stage from './stage';
import easeInOutElastic from './easeInQuad';

function sketch(p) {
  let stages = [];
  let n = 0;
  const colors = palette.flat();

  p.setup = function () {
    p.createCanvas(600, 600);

    Object.entries(activities).forEach(([attribute, value], i) => {
      const bg = colors[i];
      const stage = new Stage(p, i * p.width, 0, bg);
      stage.addStat(attribute, value);
      stages.push(stage);
    });
  };

  p.draw = function () {
    p.background('#121212');
    const second = 5,
      t = (p.frameCount % (60 * second)) / (60 * second),
      x = easeInOutElastic(t) * -p.width - n * p.width;

    if (p.frameCount % (60 * second) === 299) {
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
