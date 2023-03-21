import startSteps from '../index.js';
import getRandomInt from '../randomNum.js';

const isEven = (number) => number % 2 === 0;

const generateGameEven = () => {
  const randomNum = getRandomInt(100);
  const question = `Question: ${randomNum}`;
  const answer = isEven(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  startSteps(question, generateGameEven);
};

export default startGame;
