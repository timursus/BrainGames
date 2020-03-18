import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What number is missing in the progression?';
const progrSize = 10;

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
    const initial = getRandomInt(0, 31);
    const difference = getRandomInt(1, 11);
    const progression = generateProgression(progrSize, initial, difference);
    const hiddenIndex = getRandomInt(1, progrSize - 1);
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    gameData.push([question, answer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
