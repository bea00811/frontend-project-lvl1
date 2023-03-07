import readlineSync from 'readline-sync';

import { userName } from './index.js';

const evenLogic = () => {
  const randomNumber = Math.round(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  console.log(`Question: ${randomNumber}`);

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

/** общий делитель */

const biggestDivisorLogic = () => {
  const randomNumber1 = Math.round(Math.random() * 100);
  const randomNumber2 = Math.round(Math.random() * 100);

  console.log(`Question:${randomNumber1} ${randomNumber2}`);
  const yourAnswer = readlineSync.question('Your answer:');

  if (randomNumber1 < 0 || randomNumber2 < 0) {
    return false;
  }

  const arr = [];
  for (let x = randomNumber2; x > 0; x -= 1) {
    for (let i = randomNumber1; i > 0; i -= 1) {
      if (randomNumber1 % i === 0 && randomNumber2 % x === 0 && i === x) {
        if (randomNumber1 > randomNumber2) {
          arr.push(i);
        } else {
          arr.push(x);
        }
      }
    }
  }

  const result = Math.max(...arr);

  console.log(`'${yourAnswer}'' is wrong answer ;(. Correct answer was '${result}'`);

  if (result === +yourAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;

  // END
};

const progressLogic = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const floor = getRandomInt(90);
  const ceil = floor + 10;
  const arifmArr = [];

  for (let i = floor; i < ceil; i += 1) {
    arifmArr.push(i);
  }

  const randomNumber = getRandomInt(arifmArr.length - 1);

  const result = arifmArr[randomNumber];
  arifmArr[randomNumber] = '...';

  console.log(`Question: ${arifmArr}`);
  const yourAnswer = readlineSync.question('Your answer:');

  if (result === +yourAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const isNaturalLogic = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomNum = getRandomInt(100);
  console.log(`Question: ${randomNum}`);
  const yourAnswer = readlineSync.question('Your answer:');

  let result;

  if (randomNum === 1) {
    result = 'no';
    if (result === yourAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`Let's try again, ${userName}!`);
    return false;
  }

  for (let r = 2; r < randomNum; r += 1) {
    if (randomNum % r === 0) {
      result = 'no';
      if (result === yourAnswer) {
        console.log('Correct!');
        return true;
      }
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  result = 'yes';
  if (result === yourAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export {
  evenLogic, calcLogic, biggestDivisorLogic, progressLogic, isNaturalLogic,
};
