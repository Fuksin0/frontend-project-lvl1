#!/usr/bin/env node

import readlineSync from "readline-sync";
import question from "../src/cli.js";
import * as index from "../src/index.js";

console.log("Welcome to the Brain Games!");

const name = question();

const quiz = 'Answer "yes" if number odd otherwise answer "no".';
console.log(quiz);

const num = Math.round(Math.random() * 100 + 1);
const num1 = Math.round(Math.random() * 100 + 1);

let count = 0;
const stringYes = "yes"; 
const stringNo = "no";

for (let i = 0; i <= 3; i += 1) {
  const random = numbers();
  console.log("Question:", random);
  const answer = readlineSync.question("Your answer:");


  if (random % 2 === 0) {
    if (answer === stringYes) {
      console.log("Correct!");
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${stringYes}'.\nLet's try again, ${name}!`);
      break;
    }
  }



  if (random % 2 !== 0) {
    if (answer === stringNo) {
      console.log("Correct!");
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${stringNo}'. \nLet's try again, ${name}!`);
      break;
    }
  }



  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
}
