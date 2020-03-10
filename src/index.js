import readlineSync from 'readline-sync';

export const numOfRounds = 3;

const gameEngine = (gameData) => {
  // gameData structure: [gameTask, question0, answer0, question1, answer1, ...]
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const gameTask = gameData.shift();
  console.log(gameTask);

  for (let roundCount = 0; roundCount < numOfRounds; roundCount += 1) {
    const question = gameData.shift();
    const correctAnswer = gameData.shift();
    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
