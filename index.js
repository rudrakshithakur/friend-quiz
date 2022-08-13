var readlineSync = require("readline-sync");
var chalk = require("chalk");
// import readlineSync from 'readline-sync';
// import chalk from 'chalk';

console.log(chalk.green('-------------------------'));
var userName = readlineSync.question(chalk.greenBright("  Whats your name? "));
console.log(" \n Welcome " + userName + " to", chalk.underline("'How well do you know", chalk.red.bold("RUDZ'")), "Quiz ! \n");
console.log(chalk.cyanBright("----------------------------------"));
console.log(chalk.bgYellowBright.bold("\n HOW TO PLAY - \n"), "\n", chalk.bgCyan("Choose the correct option from the above given options. eg. if 'A)bat' is the right option then Type ", chalk.black.bold("'A'"), "in the answer section. \n"));
console.log(chalk.cyanBright("---------------------------------- \n"));
var score = 0;
var highscore = 5;
console.log(chalk.bold.green(chalk.blueBright("Current highscore is : ") + highscore + "\n"));

function quiz(question, answer) {
  var userAnswer = readlineSync.question(chalk.redBright(question));
  if (userAnswer === answer) {
    console.log("--------------------- ");
    console.log(chalk.greenBright.bold("Right!"));
    score = score + 1;
  }
  else {
    console.log("--------------------- ");
    console.log(chalk.red.bold("Wrong!"));
    console.log("Correct Answer: " + answer);
  }

  console.log("score : " + score);
  console.log("--------------------- \n");
}
var questions = [{
  question: "1) What is my favourite colour? \n   A) Maroon\n   B)Turqoise green \n   C) Blue \n   D)Voilet \n \n Answer : ",
  answer: "A",
}, {
  question: "2) My favourite desert? \n   A) jalebi\n   B) Chocolates \n   C)Icecream \n   D) Cake \n Answer : ",
  answer: "C",
}, {
  question: "3)My goto favourite place? \n   A) Mountains\n   B) Beach \n   C) Theatre  \n   D) Restaurants \n \n Answer : ",
  answer: "B",
},
{
  question: "4)Place to visit in india? \n   A) Manali\n   B)Rajasthan \n   C)Kerala  \n   D) Gujarat \n \n Answer : ",
  answer: "C",
}, {
  question: "5)LOL What was my final year project? \n   A)A College guidline website \n   B) A student forum website \n   C) A college assignment app  \n   D) A food delivery app \n \n Answer : ",
  answer: "B",
}, {
  question: "6)Out of every flavor of ice cream I ever tried, which one was my favorite? ? \n   A) Vanilla \n   B) Butterscotch \n   C) Chocolate \n   D) Caramal nuts \n \n Answer : ",
  answer: "B",
}, {
  question: "7)animal that I am afraid of?? \n   A)  Lizards\n   B)  Spiders \n   C)  None \n   D) Both A and B \n \n Answer : ",
  answer: "D",
}, {
  question: "8)What was my favorite TV show growing up? \n   A)  Shinchan \n   B)  Teletubbies \n   C)  Victorious \n   D)  Beyblade \n \n Answer : ",
  answer: "A",
}, {
  question: "9)Have I ever ridden a horse? \n   A)  No\n   B)  Yes \n\n Answer : ",
  answer: "B",
},{
  question: "10)I am most afraid of? \n   A)  Lightning \n   B)  Failure \n   C)  Scary movies \n   D) Being Judged \n \n Answer : ",
  answer: "D",
}];

for (var i = 0; i < questions.length; i++) {
  var currq = questions[i];
  quiz(currq.question, currq.answer);
}
console.log(chalk.rgb(255, 136, 0).bold("final score: "), chalk.greenBright(+score + "/10 \n \n"));
if (score > highscore) {
  highscore = score;
}

if (score <= 3) {
  console.log(chalk.magentaBright("A GOOD FRIEND"));
} else if (score > 3 && score < 6) {
  console.log(chalk.magentaBright("You know me pretty good ha!"));
} else {
  console.log(chalk.magentaBright("HEY BESTIE!"));
}



console.log("          ---------------------------");
console.log("          |", chalk.blueBright("current highscore is:") + highscore + "/10 |");
console.log("          ---------------------------");