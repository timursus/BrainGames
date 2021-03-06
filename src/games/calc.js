import gameEngine, { numOfRounds } from '../index.js';
import getRandomInt from '../randomizer.js';

const gameTask = 'What is the result of the expression?';

const calculate = (operation, operand1, operand2) => {
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
  const operations = ['+', '-', '*'];
  const numOfOperations = operations.length;

  for (let i = 0; i < numOfRounds; i += 1) {
    const operand1 = getRandomInt(0, 30);
    const operand2 = getRandomInt(0, 30);
    const operation = operations[getRandomInt(0, numOfOperations - 1)];
    const question = `${operand1} ${operation} ${operand2}`;
    const answer = calculate(operation, operand1, operand2);
    gameData.push([question, answer.toString()]);
  }

  gameEngine(gameTask, gameData);
};
