import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What number is missing in the progression?';
const progressionSize = 10;

const generateProgression = (size, initialElement, difference) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    const currentElement = initialElement + (difference * i);
    progression.push(currentElement);
  }
  return progression;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const initial = getRandomInt(0, 30);
    const difference = getRandomInt(1, 10);
    const progression = generateProgression(progressionSize, initial, difference);
    const hiddenElementIndex = getRandomInt(1, progressionSize - 2);
    const answer = progression[hiddenElementIndex];
    progression[hiddenElementIndex] = '..';
    const question = progression.join(' ');
    gameData.push([question, answer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
