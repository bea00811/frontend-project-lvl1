import readlineSync from 'readline-sync';

const steps = (question, calcLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);

  let step = 0;
  const winAnswersCount = 3;
  while (step < winAnswersCount) {
    const [rightAnswer] = calcLogic();
    const userAnswer = readlineSync.question('Your answer:');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default steps;
