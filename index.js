#! /usr/bin/env node
import inquirer from "inquirer";
let myPin = 4444;
let myBalance = 100000;
let pinAns = await inquirer.prompt([
    {
        name: "code",
        type: "number",
        message: "enter your pin code",
    },
]);
if (pinAns.code === myPin) {
    console.log("your pin code is correct.");
    let transactionAns = await inquirer.prompt([
        {
            name: "selection",
            type: "list",
            choices: ["withdrawl", "fast cash", "check balance"],
            message: "select in anyone",
        },
    ]);
    if (transactionAns.selection === "withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "cash",
                type: "number",
                message: "enter your amount",
            },
        ]);
        if (amountAns.cash <= myBalance) {
            myBalance -= amountAns.cash;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("you have a insufficent balance.");
        }
    }
    else if (transactionAns.selection === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fastest",
                type: "list",
                choices: ["1000", "5000", "10000", "25000"],
                message: "select one option",
            },
        ]);
        myBalance -= fastCash.fastest;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else {
        console.log(`your current balance is: ${myBalance}`);
    }
    ;
}
else {
    console.log("your code is incorrect");
}
;
