import startSteps from '../index.js';
import getRandomInt from '../randomNum.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGamePrime = () => {
  const randomNum = getRandomInt(10);
  const question = `Question: ${randomNum}`;
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startSteps(question, generateGamePrime);
};

export default startGame;
