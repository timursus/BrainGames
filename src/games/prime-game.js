import { getRandomInt, numOfRounds } from '../index.js';

const isPrime = (num) => {
  const half = num / 2;
  for (let divisor = 2; divisor <= half; divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return true;
};

export default () => {
  const gameTask = 'Answer "yes" if the given number is prime, otherwise answer "no".';
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const questionNum = getRandomInt(2, 50);
    const answer = isPrime(questionNum) ? 'yes' : 'no';
    gameData.push(questionNum, answer);
  }

  return gameData;
};
