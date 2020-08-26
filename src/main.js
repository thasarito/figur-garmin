import p5 from 'p5';

import activities from './activities';
import Stage from './stage';

function sketch(p) {
  let mainStage, rightStage;

  p.setup = function () {
    p.createCanvas(600, 600);

    mainStage = new Stage(p, 0, 0, '#dd5034');
    mainStage.addStat('step', activities['steps']);
    rightStage = new Stage(p, 600, 0, '#24235d');
  };

  p.draw = function () {
    p.background('#121212');
    const velocity = p.createVector(-600 / (2 * 60), 0);
    mainStage.update(velocity);
    rightStage.update(velocity);
    mainStage.display();
    rightStage.display();
  };
}

const container = document.getElementById('canvas');
new p5(sketch, container);
