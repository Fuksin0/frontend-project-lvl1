import readlineSync from 'readline-sync';

const question = () => {
let userName = readlineSync.question('May I have your name? ');
if(userName === ' ' || userName === ''){
userName = 'bestUser';
};
console.log(`Hello, ${userName}!`);
return (`${userName}`);
};

export default question;
