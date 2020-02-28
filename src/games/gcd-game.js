import {
  getName,
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

const findGCD = (num1, num2) => {
  let GCD = 1;
  const smallerNum = Math.min(num1, num2);
  for (let divisor = 2; divisor <= smallerNum; divisor += 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      GCD = divisor;
    }
  }
  return GCD;
};

export default () => {
  const name = getName();
  const gameTask = 'Find the greatest common divisor of given numbers.';
  console.log(gameTask);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomInt(0, 51);
    const number2 = getRandomInt(1, 51);
    const correctAnswer = findGCD(number1, number2);
    const pairOfNumbers = `${number1} ${number2}`;
    const answer = getAnswer(name, pairOfNumbers, correctAnswer);
    if (Number(answer) !== correctAnswer) return;
  }

  congratsSuccess(name);
};
