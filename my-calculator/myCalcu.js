#!/usr/bin/env code
import inquirer from "inquirer";
let myCalcu = await inquirer.prompt([
    {
        type: "list",
        name: "operation",
        message: "enter your operation",
        choices: ["add", "subtract", "multiply", "divide", "percent"]
    },
    {
        type: "number",
        name: "num1",
        message: "enter your first value",
    },
    {
        type: "number",
        name: "num2",
        message: "enter your second value",
    }
]);
let calculator = myCalcu.operation;
let value1 = myCalcu.num1;
let value2 = myCalcu.num2;
if (calculator === "add") {
    console.log(`The sum of your ${value1} and ${value2} is: ${value1 + value2}`);
}
else if (calculator === "subtract") {
    console.log(`The subtract of your ${value1} and ${value2} is: ${value1 - value2}`);
}
else if (calculator === "multiply") {
    console.log(`The multiply of your ${value1} and ${value2} is: ${value1 * value2}`);
}
else if (calculator === "divide") {
    console.log(`The divide of your ${value1} and ${value2} is: ${value1 / value2}`);
}
else {
    console.log(`The percent of your ${value1} and ${value2} is: ${value1 % value2}`);
}
