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
  const activityObj = activities.filter((activity) => activity.type === type);

  return activityObj[0];
};

export default { getActivityObj, getActivities };
