const activities = [
  {
    type: 'eat',
    description: 'Fullness',
    value: 100,
    button1: 'veggie',
    button2: 'cupcake'
  },
  {
    type: 'play',
    description: 'Fun',
    value: 50,
    button1: 'chase squirrel',
    button2: 'sneak out'
  },
  {
    type: 'fight',
    description: 'Strength',
    value: 100,
    button1: 'run away',
    button2: 'fight'
  },
  {
    type: 'sleep',
    description: 'Energy',
    value: 50,
    button1: 'nap',
    button2: 'sleep'
  },
];

const getActivities = () => activities;

const getActivityObj = (type) => {
  let activityObj = {};

  for (let i = 0; i < activities.length; i += 1) {
    if (activities[i].type === type) {
      activityObj = activities[i];
    }
  }

  return activityObj;
};

export default { getActivityObj, getActivities };
