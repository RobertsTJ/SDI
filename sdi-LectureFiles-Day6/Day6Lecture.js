/* Timothy Roberts
   SDI 1505
   May 16, 2015
   Day 6 Lecture
 */

 // alert("JavaScript works!");









































// Review of Day 5 Lab
// Global Variables
var num1;
var num2;
var operation;
var finalAnswer;

// Math Functions
function add(add1, add2) {

    return add1 + add2;

}

function subtract(sub1, sub2){

    return sub1 - sub2;

}

function multiply(multiply1,multiply2) {

    return multiply1 * multiply2;

}

function divide(divide1, divide2) {

    var outcome;

    if ( divide2 === 0){
        outcome = "Error: Can't divide by 0.";

    } else {
        outcome = divide1 / divide2;
    }

    return outcome;

}

function finalOutput() {
    // A function that does not return anything is called a procedure.

    console.log(num1 + " " + operation + " " + num2 + " = " + finalAnswer);
}


// Main Code
num1 = parseFloat(prompt("Enter your first number: "));
num2 = parseFloat(prompt ("Enter your second number: "));
operation = prompt("Enter the math operation you would like to perform", "+, -, *, /");

if (operation === "+") {

    finalAnswer = add(num1, num2);
    finalOutput();

} else if (operation === "-") {

    finalAnswer = subtract(num1, num2);
    finalOutput();

} else if (operation === "*") {

    finalAnswer = multiply(num1, num2);
    finalOutput();

} else if (operation === "/") {

    finalAnswer = divide(num1, num2);
    finalOutput();

} else {
    console.log("Sorry, I didn't understand that. Try again.")
}

// console.log(num1 + " " + operation + " " + num2 + " = " + finalAnswer);
