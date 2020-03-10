import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What number is missing in the progression?';

const generateProgression = () => {
  const progression = [];
  const progressionLength = 10;
  const initialNum = getRandomInt(21);
  const difference = getRandomInt(9, 1);
  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = initialNum + (difference * i);
    progression.push(currentElement);
  }
  return progression;
};

export default () => {
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const progression = generateProgression();
    const hiddenIndex = getRandomInt(9, 1);
    const answer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const questionProgression = progression.join(' ');
    gameData.push(questionProgression, answer.toString());
  }

  gameEngine(gameData);
};
