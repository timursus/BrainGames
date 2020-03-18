import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameData = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const question = getRandomInt(0, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    gameData.push(question, answer);
  }

  gameEngine(gameTask, gameData);
};
