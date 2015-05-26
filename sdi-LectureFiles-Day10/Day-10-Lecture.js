/*   Timothy Roberts
     SDI 1505
     May 26, 2015
     Day 10 Lecture Coding
 */


// Global Variables
var numArray = [3, 6, 7, 9, 23, 42, 22, 50, 34];
var currentNum = 21;
var returnedNumber;

// Function
function findNumber(argArray, argNumber) {

    // Local Variables
    var nextGreatest = 0;
    argArray = bubbleSort(argArray);
    console.log(argArray);

    for (var i = 0; i < argArray.length; i++) {

       if (argNumber < argArray[i]) {

           return argArray[i];
       }

    }

    return "No greater number in the array.";

}

// Main Code
returnedNumber = findNumber(numArray, currentNum);
console.log("The next highest number is " + returnedNumber);

// Go back to Lab 7 and check out the Day 8 lecture coding and use the bubbleSort function.




























//// alert("JavaScript works!");

//// Day 10 Lecture Coding Problem 1
//// Create a function to find the difference between to years.
////  - Prompt to ask for a year
////  - Return the difference between users entered year and the current year.
//// Output the difference in the main code.
//
//
//// Global Variables
//var returnedNumber;
//
//// Functions
//function yearsBetween() {
//
//    // Local Variables
//    var yearEntered = parseInt(prompt("What year would you like to use?", "2015"));
//    var today = new Date();
//
//    today = today.getFullYear();
//
//
//    var difference = today - yearEntered;
//
//    return difference;
//
//}
//
//// Main Code
//returnedNumber = yearsBetween();
////console.log("The difference in years is " + returnedNumber);
//


// Problem 2
// Create a Function
//


































//
///*
//    Create a function that accepts a username and password and then checks
//    that against a list of data in the JSON to determine if the user exists
//    and is allowed to login with the password provided.  The function should
//    only return a string with the first name of the user if the username and
//    password are correct.  It should return a string indicating failure if
//    the input is wrong.  The code will then output that string.
//*/
//
////  Lab 9 Review Problem 1
//// Global Variables
//// Problem 1
//// var numToFormat = parseFloat(prompt("Enter a number to format: "));
//// var numOfDecimals = parseInt(prompt("Enter a number of decimal places: "));
//// Problem 2
//// var firstNumber = prompt("Please enter a number to be converted: ");
//// var returnedNumber;
//// Problem 3
//var dateOne = new Date("5/23/3015");
//var dateTwo = new Date("5/23/2112");
//var hOrD = "days";
//
//
//// Problem Functions
//// Problem 1 - format a number to a certain number of decimal places
//function decFormat(argNumber,decPlaces) {
//
//    return argNumber.toFixed(decPlaces);
//}
//
//
//
//
//// Problem 2 function - convert a string to a number
//function convertNumber(argNumber) {
//
//    // If user did not a enter a number, ask again
//    while (isNaN(argNumber)) {
//
//        argNumber = prompt("No, I said enter a number: ");
//
//    }
//
//    return parseFloat(argNumber)
//
//}
//
//// Problem 3 Function : Find the hours or days between two dates
//function dateDiff(firstDate, secondDate, hoursOrDays) {
//
//    var difference = Math.abs(firstDate - secondDate);
//
//    if (hoursOrDays === "hours") {
//
//        difference = Math.round(difference/1000/60/60);
//
//    } else {
//
//        difference = Math.round(difference/1000/60/60/24);
//
//    }
//
//    return difference;
//}
//
//
//
//// Main Code
//// Main Code Problem 1 function call
////returnedNumber = decFormat(numToFormat, numOfDecimals);
//// console.log("The formatted number is", returnedNumber);
//
//
//// Main Code Problem 2
////returnedNumber = convertNumber(firstNumber);
//// console.log("The returned number is ", returnedNumber);
//
//// Main code problem 3 function call
//returnedNumber = dateDiff(dateOne, dateTwo, hOrD);
//
//
//
//    console.log("The difference in " + hOrD + " between " + dateOne.toDateString() + " and " + dateTwo.toDateString() + " is " + returnedNumber);
//
//
//
//

