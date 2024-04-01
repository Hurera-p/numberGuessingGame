#! /usr/bin/env node

import inquirer from "inquirer";
do {
  const randNumber = Math.round(Math.random() * 10);

  const answers = await inquirer.prompt([
    {
      name: "userGuesedNumber",
      type: "number",
      message: "Guess a number",
    },
  ]);

  if (answers.userGuesedNumber === randNumber) {
    console.log("You guessed it right!");
  } else {
    console.log("Wrong answers");
    console.log("correct answer is: ", randNumber);
  }

  const playAgain = await inquirer.prompt([
    {
      name: "play",
      type: "string",
      message: "Play again? (y/n)",
    },
  ]);

  if (playAgain.play.toLowerCase() !== "y") {
    break;
  }
} while (true);
