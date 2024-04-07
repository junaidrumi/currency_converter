#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency: any = {
   USD: 1,  // base currency
   EUR: 0.89,
   GPB: 0.76,
   INR: 74.57,
   PKR: 280,
   AED: 3.67,
   SAR: 3.75,
   QAR: 3.64,
   CNY: 7.23,
}
console.log(chalk.bold.yellowBright("\n  \t=======> Welcome to currency converter <======= \n"));

let userAnswer = await inquirer.prompt([
{
    name: "from",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR", "AED", "SAR", "QAR", "CNY"],
    message: chalk.greenBright("Enter from currency: ")
},
{
    name: "to",
    type: "list",
    choices: ["USD", "EUR", "GPB", "INR", "PKR", "AED", "SAR", "QAR", "CNY"],
    message: chalk.blueBright("Enter to currency: ")

},
{
   name: "amount",
   type: "number",
   message: chalk.magentaBright("Enter your amount: ")
   
}  
]);
let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.italic.cyanBright(`\n Converted amount is: ${convertedAmount} \n`));


