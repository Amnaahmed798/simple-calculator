#! /usr/bin/env node

console.log("\n\twelcome to \'amna\' CLI simple calculator\n");

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message : "enter your first number" , name : "firstnumber" , type : "number"},
    {message : "enter your second number" , name : "secondnumber" , type : "number"},
    {message : "select one of the operator to perform action" , name : "operator" , type :"list" , choices : ["addition" , "subtraction" , "multiplication" , "division"],
},
]);
if(answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber) ;
} 
else if(answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber) ;
} 
else if(answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber) ;
}
 else if(answer.operator === "divison"){
    console.log(answer.firstnumber / answer.secondnumber) ;
} 
else{"please select valid operator"};

