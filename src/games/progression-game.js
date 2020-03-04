import { getRandomInt, numOfRounds } from '../index.js';

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
  const gameTask = 'What number is missing in the progression?';
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const progression = generateProgression();
    const hiddenIndex = getRandomInt(1, 9);
    const hiddenElement = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const progressionString = progression.join(' ');
    gameData.push(progressionString, hiddenElement);
  }

  return gameData;
};
