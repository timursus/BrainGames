import readlineSync from 'readline-sync';
import welcomeMessage from './index.js';

export default () => {
  const name = welcomeMessage();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    const answer = readlineSync.question(`\nQuestion: ${number} \nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
