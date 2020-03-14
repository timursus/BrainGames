import readlineSync from 'readline-sync';

export const numOfRounds = 3;

const gameEngine = (gameTask, gameData) => {
  // gameData structure: [question0, answer0, question1, answer1, question2, answer2]
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(gameTask);

  for (let roundCount = 0; roundCount < numOfRounds; roundCount += 1) {
    const currQuestionInd = roundCount * 2;
    const question = gameData[currQuestionInd];
    const correctAnswer = gameData[currQuestionInd + 1];

    console.log(`\nQuestion: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
