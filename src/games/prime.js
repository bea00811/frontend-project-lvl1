import steps from '../index.js';

const isNaturalLogic = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomNum = getRandomInt(100);
  console.log(`Question: ${randomNum}`);

  let result;

  if (randomNum === 1) {
    result = 'no';
    return [result];
  }

  for (let r = 2; r < randomNum; r += 1) {
    if (randomNum % r === 0) {
      result = 'no';
      return [result];
    }
  }

  result = 'yes';
  return [result];
};

const startGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  steps(question, isNaturalLogic);
};

export default startGame;
