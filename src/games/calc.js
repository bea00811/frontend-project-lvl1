import steps from '../index.js';

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
  const rightAnswer = String(expression);
  return [rightAnswer];
};

const startGame = () => {
  const question = 'What is the result of the expression?';
  steps(question, calcLogic);
};

export default startGame;
