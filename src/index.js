import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const name = getName();

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const numberOfRounds = 3;

export const getAnswer = (question, correctAnswer) => {
  const answer = readlineSync.question(`\nQuestion: ${question} \nYour answer: `);
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
  }
  return answer;
};

export const congratsSuccess = () => console.log(`Congratulations, ${name}!`);
