import helpers from './universal-helpers';
import data from './data';

const eatDiv = (divId) => {
  helpers.displayDiv(divId);

  $('#button1-eat').click(() => {
    const eatObj = data.getActivityObj('eat');
    eatObj.value += 10;
  });
};

export default { eatDiv };
