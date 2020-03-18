import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'Answer "yes" if the given number is prime, otherwise answer "no".';

const isPrime = (num) => {
  const half = num / 2;
  for (let divisor = 2; divisor <= half; divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return true;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const question = getRandomInt(2, 50);
    const answer = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, answer]);
  }

  gameEngine(gameTask, gameData);
};
