import readlineSync from 'readline-sync';

const gameLogic = (gameTask, roundsControl) => {

console.log('Welcome to the Brain Games!'); 

const name = readlineSync.question('May i have your name? ');
console.log(`Hello, ${name}!`);

console.log(gameTask);

const roundsCount = 3;

for(let i = 0;i < roundsCount;i += 1){
    const [value, rightAnswer] = roundsControl();
	console.log(`Question: ${value}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer === rightAnswer) {
	console.log("Correct!");
	} else {
	console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
	return;	
}
};
    console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
