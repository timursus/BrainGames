import {
  getName,
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

const generateProgression = () => {
  const progression = [];
  const progressionLength = 10;
  const initialNum = getRandomInt(0, 21);
  const difference = getRandomInt(1, 9);
  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = initialNum + (difference * i);
    progression.push(currentElement);
  }
  return progression;
};

export default () => {
  const name = getName();
  const gameTask = 'What number is missing in the progression?';
  console.log(gameTask);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const progression = generateProgression();
    const hiddenIndex = getRandomInt(1, 9);
    const hiddenElement = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const progressionString = progression.join(' ');
    const answer = getAnswer(name, progressionString, hiddenElement);
    if (Number(answer) !== hiddenElement) return;
  }

  congratsSuccess(name);
};
