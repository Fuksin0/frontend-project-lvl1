import gameLogic from "../index.js";
import randomNumber from "../random.js";

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = (num) => {

for(let i = 2;i <= Math.sqrt(num);i += 1){
if(num % i === 0) {
return false;
}
}
return true;
};

const test = () => {
const num = randomNumber(2,23);
const rightAnswer = (game(num)) ? "yes" : "no";
return [rightAnswer, num];
};

const primeStart = () => gameLogic(test,gameTask);

export default primeStart;

