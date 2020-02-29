import {
  getName,
  getAnswer,
  displayTheTask,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const name = getName();
  const numberProperty = 'even';
  displayTheTask(numberProperty);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomInt(0, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const answer = getAnswer(name, number, correctAnswer);
    if (answer !== correctAnswer) return;
  }

  congratsSuccess(name);
};
