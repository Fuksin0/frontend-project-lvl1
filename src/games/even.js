import gameLogic from "../index.js";
import randomNumber from "../random.js";

const gameTask = 'Answer "yes" if number odd otherwise answer "no".';

const brainCore = (num) => {
if(num % 2 === 0){
return true;
}
return false;
};

const tech = () => {
const num = randomNumber(1, 20);
const result = (brainCore(num)) ? 'yes' : 'no';
return [result, num];
};

const brainEven = () => gameLogic(tech, gameTask);

export default brainEven;
