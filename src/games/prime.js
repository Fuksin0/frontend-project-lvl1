import gameLogic from "../index.js";
import randomNumber from "../random.js";

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = (n) => {

for(let i = 2;i <= Math.sqrt(n);i += 1){
if(n % i === 0) {
return false;
}
}
return true;
};

const primeCore  = () => {
const num = randomNumber(2,23);
const rightAnswer = (game(n)) ? "yes" : "no";
return [rightAnswer, n];
};

const primeStart = () => gameLogic(test,gameTask);

export default primeStart;

