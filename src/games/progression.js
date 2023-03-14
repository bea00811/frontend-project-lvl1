import steps from '../index.js';

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
  arifmArr[randomNumber] = '..';
  const questionArray = arifmArr.join(' ');
  console.log(`Question: ${questionArray}`);

  const rightAnswer = String(result);
  return [rightAnswer];
};

const startGame = () => {
  const question = 'What number is missing in the progression?';
  steps(question, progressLogic);
};

export default startGame;
