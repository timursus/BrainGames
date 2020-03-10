import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const questionNum = getRandomInt(100);
    const answer = isEven(questionNum) ? 'yes' : 'no';
    gameData.push(questionNum, answer);
  }

  gameEngine(gameData);
};
