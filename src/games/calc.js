import getRandomInt from '../randomNum.js';
import startSteps from '../index.js';

const generateGameCalc = () => {

  const operations = [['+', (a, b) => a + b], ['-', (a, b) => a - b], ['*', (a, b) => a * b]];
  const firstNum = getRandomInt(100);
  const secondNum = getRandomInt(100);
  const signsIndex = getRandomInt(operations.length,0); 
  const [sign, operation] = operations[signsIndex];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = operation(firstNum, secondNum).toString();
  return [question, answer];
};

const startGame = () => {
  const question = 'What is the result of the expression?';
  startSteps (question, generateGameCalc);
};

export default startGame;
