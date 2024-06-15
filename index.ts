#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.hex('cd5c5c').bold`\n \t $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);


console.log(chalk.hex('a52a2a').bold.italic`\n \t \t $$$$$$$$$$$$$$$ CURRENCY CONVERTOR PROJECT💲$$$$$$$$$$$$$$$`);

console.log(chalk.hex('cd5c5c').bold`\n \t $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`);


let whileLoop : boolean = true;

// List of currency and its exchange rates

let currency_value : any = {
    USD:1,   // Base Currency
    EUR:0.19, // European Currency(Euro)
    GBP:0.76, // British Pound
    INR: 74.57,  // Indian Rupees
    UAE:3.67,   // Unitid stat dollar
    JYP:113,  // Japenese Currency(yen)
    CAD:1.3,  // Canadian Dollar
    AUD:1.65,  // Australian Currency
    PKR: 278.22,   // Pakistan Rupees
    Saudi_Riyal : 3.75,  // Saudi Currency(riyal)
    
}




while (whileLoop) {
    
    
// taking prompt from user to choice currency to convert from and to..
    let currency_convert = await inquirer.prompt([
        {
            name : 'convert_from',
            type : 'list',
            message : chalk.hex('008000').bold.italic('\n Select a currency you want to convert from'),
            choices : ['USD','EUR','GBP','INR','UAE','JYP','CAD',' AUD','PKR','Saudi_Riyal']
        },

        {
            name : 'convert_to',
            type : 'list',
            message :chalk.hex('008000').bold.italic('\n Select a currency you want to convert to'),
            choices : ['USD','EUR','GBP','INR','UAE','JYP','CAD',' AUD','PKR','Saudi_Riyal']
        },

        {
            name : 'amount',
            type : 'number',
            message : chalk.hex('008000').bold.italic('\n Entet your amount to convert'),
        },
        
    ])

    // here we will be destructuring...

    const {convert_from,convert_to,amount} = currency_convert;

    
// let fromAmount = currency_value[convert_from];
// let toAmount = currency_value[convert_to];
// let base_currency = amount / fromAmount;
// let currencyConverted = base_currency * toAmount;

// console.log(currencyConverted);

// here converting the currency by using syntax:- 
let converting_amount = currency_value[convert_to] / currency_value[convert_from] *amount

// Now print the message:-

let convertedAmount = converting_amount.toFixed(2);
console.log( chalk.hex('32cd32').bold.italic(`\n ${convert_from} amount  💸  ${amount} converted to ${convert_to} = ${convertedAmount} `));


let convertingAgain = await inquirer.prompt(
    {
        name : 'convert_more',
        type : 'confirm',
        message : chalk.hex('008000').bold.italic('\n Do you want to more conversion?'),
        default : false
    });

    if (convertingAgain.convert_more === false) {
        whileLoop = false;
        console.log(chalk.hex('6b8e23').bold.italic.underline(`\n \t \t Thank you for using my currency convertor project! 😄`));
        
    }


}