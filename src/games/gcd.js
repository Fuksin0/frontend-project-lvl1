import randomNumber from '../random.js';
import gameLogic from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbes.';

const gcdGame = (num1, num2) => {
  let a = num1;
  let b = num2;
  let result;
  while (b !== 0) {
    result = b;
    b = a % b;
    a = result;
  }
  return result;
};

const maths = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const randomExpression = `${num1} ${num2}`;
  const result = gcdGame(num1, num2).toString();
  return [result, randomExpression];
};

const gcdRound = () => gameLogic(maths, gameTask);

export default gcdRound;
