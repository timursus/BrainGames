import {
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

export default () => {
  const gameTask = 'What is the result of the expression?';
  console.log(gameTask);
  const operationOptions = ['+', '-', '*'];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const operand1 = getRandomInt(31);
    const operand2 = getRandomInt(31);
    const operation = operationOptions[getRandomInt(3)];
    const expression = `${operand1} ${operation} ${operand2}`;
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = operand1 + operand2;
        break;

      case '-':
        correctAnswer = operand1 - operand2;
        break;

      default:
        correctAnswer = operand1 * operand2;
    }
    const answer = getAnswer(expression, correctAnswer);
    if (Number(answer) !== correctAnswer) return;
  }

  congratsSuccess();
};
