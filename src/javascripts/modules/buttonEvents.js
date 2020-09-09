import data from './data';
import domManipulation from './domManipulation';

const buttonEvents = () => {
  $('#button1-eat').click(() => {
    const eatObj = data.getActivityObj('eat');

    if (eatObj.value + 10 > 100) {
      eatObj.value = 100;
    } else if (eatObj.value + 10 <= 100) {
      eatObj.value += 10;
    }

    domManipulation.updateQuadrantValue('eat');
  });

  $('#button2-eat').click(() => {
    const eatObj = data.getActivityObj('eat');

    if (eatObj.value - 3 < 0) {
      eatObj.value = 0;
    } else if (eatObj.value - 3 >= 0) {
      eatObj.value -= 3;
    }

    domManipulation.updateQuadrantValue('eat');
  });

  $('#button1-play').click(() => {
    const playObj = data.getActivityObj('play');

    if (playObj.value + 2 > 100) {
      playObj.value = 100;
    } else if (playObj.value + 2 <= 100) {
      playObj.value += 2;
    }

    domManipulation.updateQuadrantValue('play');
  });

  $('#button2-play').click(() => {
    const playObj = data.getActivityObj('play');

    if (playObj.value + 50 > 100) {
      playObj.value = 100;
    } else if (playObj.value + 50 <= 100) {
      playObj.value += 50;
    }

    domManipulation.updateQuadrantValue('play');
  });
};

export default { buttonEvents };
