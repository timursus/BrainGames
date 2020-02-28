import {
  getName,
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
} from '../index.js';

const calculateAnswer = (operand1, operation, operand2) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;

    case '-':
      return operand1 - operand2;

    default:
      return operand1 * operand2;
  }
};

export default () => {
  const name = getName();
  const gameTask = 'What is the result of the expression?';
  console.log(gameTask);
  const operationOptions = ['+', '-', '*'];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const operand1 = getRandomInt(0, 31);
    const operand2 = getRandomInt(0, 31);
    const operation = operationOptions[getRandomInt(0, 3)];
    const expression = `${operand1} ${operation} ${operand2}`;
    const correctAnswer = calculateAnswer(operand1, operation, operand2);
    const answer = getAnswer(name, expression, correctAnswer);
    if (Number(answer) !== correctAnswer) return;
  }

  congratsSuccess(name);
};
