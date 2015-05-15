/* Timothy Roberts
   SDI 1505
   May 14, 2015
   Lab 5: Using Functions
 */

//alert("JavaScript works!");


// Start

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

// Function 4 for division
function division(numDivide1, numDivide2) {
    var divide = numDivide1 / numDivide2;

    return divide
}



// Main code

// Addition
if (symbol === "+") {
    total = addition(input1, input2);
    console.log("You input " + input1 + " + " + input2 + ", it = " + total + ".");

// Subtraction
} else if (symbol === "-") {
    total = minus(input1,input2);
    console.log("You input " + input1 + " - " + input2 + ", it = " + total + ".");

// Multiplication
} else if (symbol === "*"){
    total = times(input1, input2);
    console.log("You input " + input1 + " * " + input2 + ", it = " + total + ".");

// Division
} else if (symbol === "/") {
    total = division(input1, input2);
    console.log("You input " + input1 + " / " + input2 + ", it = " + total + ".");

        if (symbol === "/" && input2 === 0) {
            total = console.log("You can't divide a number by 0");
        }

} else {
    // If user has input a invalid operation.
    console.log("You have entered a invalid function. Please try again. ")

}

// End