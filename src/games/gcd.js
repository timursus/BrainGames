import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  const smaller = Math.min(num1, num2);
  for (let divisor = smaller; divisor > 1; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

export default () => {
  const gameData = [];

  for (let i = 0; i < numOfRounds; i += 1) {
    const number1 = getRandomInt(0, 50);
    const number2 = getRandomInt(1, 50);
    const question = `${number1} ${number2}`;
    const answer = findGCD(number1, number2);
    gameData.push([question, answer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
