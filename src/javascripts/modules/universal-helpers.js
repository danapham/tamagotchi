import data from './data';

const displayDiv = (divId) => {
  const activity = data.getActivityObj(divId);

  $(`#${divId}`).html(`
  <h1>${activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}</h1>
  <h2>${activity.description}:</h2>
  <h3>${activity.value}</h3>
  <button id="button1-${divId}">${activity.button1}</button>
  <button id="button2-${divId}">${activity.button2}</button>`);
};

export default { displayDiv };
