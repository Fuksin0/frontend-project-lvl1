import randomNumber from "../random.js";
import gameLogic from "../index.js";


const gameTask = 'What is the result of the expression?';

const rightAnswersCheck = (num1,num2,random) => {
switch (random) {
  case '+':
  return num1 + num2;
  break;
  case '-':
  return num1 - num2;
   break;
  case '*':
  return num1 * num2;
  break;
  default:
  return 'unknown operands';
}
};

const calcCore = () => {
const operands = ["+", "-", "*"];
const random = operands[randomNumber(0, operands.length - 1)];
const num1 = randomNumber(1,25);
const num2 = randomNumber(1,25);
const randomexp = `${num1} ${random} ${num2}`;
const rightAnswer = rightAnswersCheck(num1,num2,random).toString();
return [rightAnswer, randomexp];
};

const calcGame = () => gameLogic(calcCore, gameTask);

export default calcGame;
