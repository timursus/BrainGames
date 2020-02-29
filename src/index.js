import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const numberOfRounds = 3;

const getAnswer = (name, question, correctAnswer) => {
  const answer = readlineSync.question(`\nQuestion: ${question} \nYour answer: `);
  if (answer === correctAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
  }
  return answer;
};

const congratsSuccess = (name) => console.log(`Congratulations, ${name}!`);

export {
  getName,
  getAnswer,
  numberOfRounds,
  getRandomInt,
  congratsSuccess,
};
