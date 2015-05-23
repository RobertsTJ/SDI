/*  Timothy Roberts
    SDI 1505
    May 23, 2015
    Day 9 Lecture Coding
*/

// alert("JavaScript works!");

// Review of lab 8 problem 1

// Create a function
// Check the string
// Only 1 @ symbol
// At least one dot after @
// No spaces

// Global Variables
var myEmail= "troberts@fullsail.edu";
var emailTrueOrFalse;

// Problem Functions
// First function: check email address
function checkEmail(argEmail) {

    // Local Variables
    var goodEmail = false;
    var atSymbol = argEmail.indexOf("@");
    var dotSymbol = argEmail.lastIndexOf(".");
    var noSpaces = argEmail.indexOf(" ");
    var lastAt = argEmail.lastIndexOf("@");

    // Checking for @ symbol
    if (atSymbol === lastAt && atSymbol != -1) {

        goodEmail = true;

    } else {

        return false;
    }

    if (dotSymbol > atSymbol) {

        goodEmail = true;

    } else {

        return false;

    }

    if (noSpaces == -1) {

        goodEmail = true;

    } else {

        goodEmail = false;
    }

    return goodEmail;

}

// Main Code
emailTrueOrFalse = checkEmail(myEmail);
console.log("It is " + emailTrueOrFalse + " that this email is valid.");