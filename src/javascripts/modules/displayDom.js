import helpers from './domManipulation';
import buttonEvents from './buttonEvents';

const showQuadrants = () => {
  helpers.displayDiv('eat');
  helpers.displayDiv('play');
  helpers.displayDiv('fight');
  helpers.displayDiv('sleep');

  buttonEvents.buttonEvents();
};

const showPet = () => {
  $('#pet').html(`
    <img src="src/images/racoon.png" id="petImg" alt="racoon illustration">`);
};

export default { showQuadrants, showPet };
