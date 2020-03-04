import { getRandomInt, numOfRounds } from '../index.js';

const findGCD = (num1, num2) => {
  const smallerNum = Math.min(num1, num2);
  for (let divisor = smallerNum; divisor >= 2; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

export default () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const gameData = [];
  gameData.push(gameTask);

  for (let i = 0; i < numOfRounds; i += 1) {
    const number1 = getRandomInt(0, 51);
    const number2 = getRandomInt(1, 51);
    const pairOfNumbers = `${number1} ${number2}`;
    const answer = findGCD(number1, number2);
    gameData.push(pairOfNumbers, answer);
  }

  return gameData;
};
