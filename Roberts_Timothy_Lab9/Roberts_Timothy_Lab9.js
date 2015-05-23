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

// Start
//// Global Variables
//var firstNum = 1;
//var returnedNum;
//
//// Function
//function toFixedFunction() {
//
//    // Local Variables
//    num = firstNum.toFixed(2);
//
//    return num;
//}
//
//// Main Code
//returnedNum = toFixedFunction();
//console.log("The number is " + returnedNum);
// End



// Problem 2
// Send string in to the function
// Return it as a number
// Determine if the string sent into the function is a number before you do the conversion.

// Start
// Global Variables
var num = (prompt("Please enter a number: ", "987"));
var varReturn = stringNumber(num);

// Function
function stringNumber(argPrompt) {

    // Local Variables
    var returnedString;

    if (isNaN(argPrompt)) {

        returnedString = ("This is not a number.");

    } else {

        returnedString = parseFloat(argPrompt);

    }

    return returnedString;

}

// Main Code
console.log(varReturn);

// End