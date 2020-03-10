import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What is the result of the expression?';

const calculateAnswer = (operand1, operation, operand2) => {
  switch (operation) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

export default () => {
  const gameData = [];
  gameData.push(gameTask);
  const operationOptions = ['+', '-', '*'];
  const numOfOptions = operationOptions.length;

  for (let i = 0; i < numOfRounds; i += 1) {
    const operand1 = getRandomInt(31);
    const operand2 = getRandomInt(31);
    const operation = operationOptions[getRandomInt(numOfOptions)];
    const expression = `${operand1} ${operation} ${operand2}`;
    const answer = calculateAnswer(operand1, operation, operand2);
    gameData.push(expression, answer.toString());
  }

  gameEngine(gameData);
};
