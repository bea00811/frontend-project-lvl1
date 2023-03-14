import steps from '../index.js';
import getRandomInt from '../randomNum.js';

/** общий делитель */

const biggestDivisorLogic = () => {
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  if (randomNumber1 === 0 || randomNumber2 === 0) {
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
  const rightAnswer = String(result);

  return [rightAnswer];
  // END
};

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers';
  steps(question, biggestDivisorLogic);
};

export default startGame;
