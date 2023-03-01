#!/usr/bin/env node

import readlineSync from 'readline-sync';
// import * as bg from '../src/cli.js';
import { askName, userName } from '../src/greeting.js';
// const userName = readlineSync.question('May I have your name? ');
// console.log(`Hi ${userName}!`);
askName();
const askNumber = () => {
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
let step = 0;
for (let i = 0; i < 3; i += 1) {
  const x = askNumber();
  if (x === false) {
    break;
  } else {
    step += 1;

    if (step === 3) {
      console.log(`Congratulations,${userName}!`);
    }
  }
}
