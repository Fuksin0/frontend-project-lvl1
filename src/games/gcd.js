import readlineSync from "readline-sync";
import gameLogic from "../index.js";

const gameTask = 'Find the greatest common divisor of given numbes.';
const game = () => {
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

const randomNumber = (number) => Math.floor(Math.random() * number);
const num1 = randomNumber(100);
const num2 = randomNumber(100);

const randomExpression = `${num1} ${num2}`;

const result = gcdGame(num1, num2).toString();
  return [randomExpression, result];
};

 gameLogic(gameTask, maths);
};
export default game;
