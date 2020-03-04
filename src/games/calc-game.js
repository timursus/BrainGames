import { getRandomInt, numOfRounds } from '../index.js';

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
  const gameTask = 'What is the result of the expression?';
  const gameData = [];
  gameData.push(gameTask);
  const operationOptions = ['+', '-', '*'];

  for (let i = 0; i < numOfRounds; i += 1) {
    const operand1 = getRandomInt(0, 31);
    const operand2 = getRandomInt(0, 31);
    const operation = operationOptions[getRandomInt(0, 3)];
    const expression = `${operand1} ${operation} ${operand2}`;
    const answer = calculateAnswer(operand1, operation, operand2);
    gameData.push(expression, answer);
  }

  return gameData;
};
