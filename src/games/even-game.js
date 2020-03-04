import { getRandomInt, numOfRounds } from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const questionNum = getRandomInt(0, 100);
    const answer = isEven(questionNum) ? 'yes' : 'no';
    gameData.push(questionNum, answer);
  }

  return gameData;
};
