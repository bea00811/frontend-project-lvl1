import readlineSync from 'readline-sync';

const startSteps = (greetingQuestion, calcLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(greetingQuestion);

  let step = 0;
  const winAnswersCount = 3;
  while (step < winAnswersCount) {
    const [question, rightAnswer] = calcLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
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
export default startSteps;
