import readlineSync from "readline-sync";
import gameLogic from "../index.js";

const calc = () => {

const gameTask = 'What is the result of the expression?';

const calcGame = () => {

const randomNumber = (number) => Math.floor(Math.random() * number);
const num1 = randomNumber(25);
const num2 = randomNumber(25);

const operands = ["+", "-", "*"];
const random =  Math.floor(Math.random() * operands.length);//random math operand

const randomExpression = `${num1}${operands[random]}${num2}`;

let result = 0;
switch (operands[random]) {
  case '+':
  result = num1 + num2;
  break;
  case '-':
  result = num1 - num2;
   break;
  case '*':
  result = num1 * num2;
  break;
  default:
  return 'unknown operands';
};
result = result.toString();

	return [randomExpression,result];
};
	gameLogic(gameTask, calcGame);
};

export default calc;
