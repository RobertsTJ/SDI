/* Timothy Roberts
   SDI 1505
   May 14, 2015
   Lab 5: Using Functions
 */

//alert("JavaScript works!");

// Global Variables
var input1 = parseFloat(prompt("Please enter your first number: "));
var input2 = parseFloat(prompt("Please enter your second number: "));
var total;
var symbol = prompt("Do you want to + , - , * , or /? ");


// Function 1 for addition
function addition(numAdd1, numAdd2) {
    var plus =  numAdd1 + numAdd2;

    return plus;

}

// Function 2 for subtraction
function minus(numMinus1, numMinus2) {
    var subtract = numMinus1 - numMinus2;

    return subtract
}

// Function 3 for multiplication
function times(numTimes1, numTimes2) {
    var multiply = numTimes1 * numTimes2;

    return multiply
}


// Main code

// Addition
if (symbol === "+") {
    total = addition(input1, input2);
    console.log("You input " + input1 + " + " + input2 + " and that = " + total + ".");


// Subtraction
} else if (symbol === "-") {
    total = minus(input1,input2);
    console.log("You input " + input1 + " - " + input2 + " and that = " + total + ".");

// Multiplication
} else if (symbol === "*"){
    total = times(input1, input2);
    console.log("You input " + input1 + " * " + input2 + " and that = " + total + ".");
}

