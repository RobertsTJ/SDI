/*
 Timothy Roberts
 SDI 1505

 */


//Variables
var myName = "Timothy Roberts";
var myAge = 26;
var myJob = "Student";
var employed = true;
var numOfYears = 0;

//Initial Outputs
console.log(" Hello, my name is " + myName + ".");
console.log(" My age is " + myAge + ".");
console.log(" My job is a" + myJob + ".");
console.log(" It's " + employed + " that I'm still employed.");

employed = confirm("Are you still employed?\nClick OK for Yes, or Cancel for no.");
numOfYears = prompt("How many years have you aged? Please enter a number.");

// cast the string value as a number
numOfYears = parseFloat(numOfYears);

console.log(" It's " + employed + " that I'm still employed.");
console.log(" I am now " + myAge + numOfYears + ".");
