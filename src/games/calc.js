import randomNumber from '../random.js';
import gameLogic from '../index.js';

const gameTask = 'What is the result of the expression?';

const rightAnswersCheck = (num1, num2, randomOperand) => {
  switch (randomOperand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'unknown operands';
  }
};

const calcCore = () => {
  const operands = ['+', '-', '*'];
  const randomOperand = operands[randomNumber(0, operands.length - 1)];
  const num1 = randomNumber(1, 25);
  const num2 = randomNumber(1, 25);
  const randomExpression = `${num1} ${randomOperand} ${num2}`;
  const rightAnswer = rightAnswersCheck(num1, num2, randomOperand).toString();
  return [rightAnswer, randomExpression];
};

const calcGame = () => gameLogic(calcCore, gameTask);

export default calcGame;
