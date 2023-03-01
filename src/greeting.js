import readlineSync from 'readline-sync';

export const sayHello = console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? ');
export const askName = () => {
  console.log(`Hi ${userName}!`);
};
