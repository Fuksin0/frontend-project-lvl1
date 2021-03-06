import readlineSync from 'readline-sync';

const gameLogic = (roundsControl, gameTask) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  const roundsCount = 3;

  console.log(gameTask);

  for (let i = 0; i < roundsCount; i += 1) {
    const [rightAnswer, value] = roundsControl();
    console.log(`Question: ${value}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
