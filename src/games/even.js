import steps from '../index.js';

const evenLogic = () => {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);

  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  // userAnswer, rightAnswer

  return [rightAnswer];
};

const startGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  steps(question, evenLogic);
};

export default startGame;
