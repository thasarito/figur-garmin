import p5 from 'p5';

import activities from './activities';
import footstep from './footstep';

function sketch(p) {
  let fs;

  p.setup = function () {
    p.createCanvas(600, 600);

    fs = new footstep(p, p.width / 2, p.height / 2);
  };

  p.draw = function () {
    p.background('#121212');
    fs.update();
    fs.display();
  };
}

const container = document.getElementById('canvas');
new p5(sketch, container);
