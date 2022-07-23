import gameLogic from "../index.js";
import randomNumber from "../random.js";

const gameTask = 'What number is missing in the progression?';

const iter = (start,step,length) => {
	let result  = [];
	for(let i = 0; i < length; i += 1){
	result.push(i * step + start);
	}
	return result;
};

const progressionGame = () => {
const step = randomNumber(1, 5);
const length = randomNumber(5, 10);
const start = randomNumber(1, 55);
  const value = iter(start, step, length);
  const hiddenNumber = randomNumber(1,value.length - 1);
  const rightAnswer = value[hiddenNumber].toString();
  value[hiddenNumber] = '..';
  const question = value.join(' ');
  return [rightAnswer, question];

};

const startGame = () => gameLogic(progressionGame, gameTask);

export default startGame;

