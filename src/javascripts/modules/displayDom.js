import helpers from './domManipulation';
import buttonEvents from './buttonEvents';

const showQuadrants = () => {
  helpers.displayDiv('eat');
  helpers.displayDiv('play');
  helpers.displayDiv('fight');
  helpers.displayDiv('sleep');

  buttonEvents.buttonEvents();
};

export default { showQuadrants };
