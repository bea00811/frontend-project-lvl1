import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const userName = readlineSync.question('May I have your name? ');
const greeting2 = () => {
  console.log(`Hello, ${userName}!`);
};

const steps = (gameLogic) => {
  let step = 0;
  let userResponse = true;
  while (userResponse && step < 3) {
    step += 1;
    userResponse = gameLogic();
    if (step === 3 && userResponse) {
      console.log(`Congratulations,${userName}!`);
    }
  }
};

export {
  greeting, greeting2, steps, userName,
};
