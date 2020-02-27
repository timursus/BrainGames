import {
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

export default () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(gameTask);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomInt(100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const answer = getAnswer(number, correctAnswer);
    if (answer !== correctAnswer) return;
  }

  congratsSuccess();
};
