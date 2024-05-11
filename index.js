#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of operators to perform action ",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//   CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    "please select correct operator";
}
console.log('The End');
