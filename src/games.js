import readlineSync from 'readline-sync';

import { userName } from './index.js';

const evenLogic = () => {
  const randomNumber = Math.round(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no" ');

  console.log(`Question:${randomNumber}`);

  const yourAnswer = readlineSync.question('Your answer:');

  if (
    (randomNumber % 2 === 0 && yourAnswer === 'yes')
    || (randomNumber % 2 !== 0 && yourAnswer === 'no')
  ) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const calcLogic = () => {
  const symbol = Math.floor(Math.random() * 3);
  const randomLeftNumber = Math.round(Math.random() * 100);
  const randomRightNumber = Math.round(Math.random() * 100);

  let operator;
  let expression;
  if (symbol === 0) {
    operator = '+';
    expression = randomLeftNumber + randomRightNumber;
  } else if (symbol === 1) {
    operator = '-';
    expression = randomLeftNumber - randomRightNumber;
  } else if (symbol === 2) {
    operator = '*';
    expression = randomLeftNumber * randomRightNumber;
  }

  console.log(`Question: ${randomLeftNumber} ${operator} ${randomRightNumber}`);
  const yourAnswer = readlineSync.question('Your answer:');
  if (+yourAnswer === expression) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};
export { evenLogic, calcLogic };
