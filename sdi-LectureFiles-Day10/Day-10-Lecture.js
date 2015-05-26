/*   Timothy Roberts
     SDI 1505
     May 26, 2015
     Day 10 Lecture Coding
 */

// alert("JavaScript works!");

/*
    Create a function that accepts a username and password and then checks
    that against a list of data in the JSON to determine if the user exists
    and is allowed to login with the password provided.  The function should
    only return a string with the first name of the user if the username and
    password are correct.  It should return a string indicating failure if
    the input is wrong.  The code will then output that string.
*/

//  Lab 9 Review Problem 1
// Global Variables
// Problem 1
var numToFormat = parseFloat(prompt("Enter a number to format: "));
var numOfDecimals = parseInt(prompt("Enter a number of decimal places: "));
// Problem 2
// var firstNumber = prompt("Please enter a number to be converted: ");
// var returnedNumber;


// Problem Functions
// Problem 1 - format a number to a certain number of decimal places
function decFormat(argNumber,decPlaces) {

    return argNumber.toFixed(decPlaces);
}




// Problem 2 function - convert a string to a number
function convertNumber(argNumber) {

    // If user did not a enter a number, ask again
    while (isNaN(argNumber)) {

        argNumber = prompt("No, I said enter a number: ");

    }

    return parseFloat(argNumber)

}

// Main Code
// Main Code Problem 1 function call
returnedNumber = decFormat(numToFormat, numOfDecimals);
console.log("The formatted number is", returnedNumber);


// Main Code Problem 2
//returnedNumber = convertNumber(firstNumber);
// console.log("The returned number is ", returnedNumber);

