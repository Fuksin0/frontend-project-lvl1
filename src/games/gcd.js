import randomNumber from "../random.js";
import gameLogic from "../index.js";

const gameTask = 'Find the greatest common divisor of given numbes.';

const gcdGame = (num1, num2) => {
let gcd;
while(num1 !== num2) {
if (num1 > num2) {
num1 = num1 - num2;
} else {
num2 = num2 - num1;
}
};
gcd = num1;
return gcd;
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
