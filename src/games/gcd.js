import startSteps from '../index.js';
import getRandomInt from '../randomNum.js';



  const findDivisor= (firstNum, secondNum) => {
    const bigger = (firstNum > secondNum) ? firstNum : secondNum;
    const smaller = (firstNum > secondNum) ? secondNum : firstNum;
    if (bigger % smaller === 0) { return smaller; }
    return findDivisor(smaller, bigger % smaller);
  };
  
  const generateGameGcd= () => {
    const randomNum1 = getRandomInt(100);
    const randomNum2 = getRandomInt(100);
    const question = `Question: ${randomNum1} ${randomNum2}`;
    const answer = findDivisor(randomNum1, randomNum2).toString();
    return [question, answer];
  };


// };

const startGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  startSteps(question, generateGameGcd);
};

export default startGame;
