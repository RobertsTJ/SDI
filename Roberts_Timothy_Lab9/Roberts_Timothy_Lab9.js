/*  Timothy Roberts
    SDI 1505
    May 23, 2015
    Lab 9: Numbers and Date Objects
 */

// alert("JavaScript works!");

// Problem 1
// Create a function that will format a number to a specified number of decimal places.
// Accept 2 numbers: a number formatted, and a number that represented decimal places
// Return new formatted number
// Output in meaningful way


// Global Variables
var firstNum = 1;
var returnedNum;


function toFixedFunction() {

    // Local Variables
    num = firstNum.toFixed(2);

    return num;
}

returnedNum = toFixedFunction();
console.log("The number is " + returnedNum);