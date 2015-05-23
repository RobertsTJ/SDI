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

// Problem Two
var returnedString;
var stringList = "a,b,c,d,e+f,g,h";
var first = ",";
var second = "/";


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

// Review of lab 8 problem 2

// Create a function
// Accept 3 strings
// List of items separated by character
// The separator character
// A new separator character
// Take the first string, replace the initial separator with a new separator
// Return the string

// Split a string at a specified separator and replace it with a new separator
function stringSep(oldString, firstSept, newSept) {

    var newString = "";


    for (var i = 0; i < oldString.length; i++) {

        if (oldString.substr(i,1) === firstSept) {

            newString = newString + newSept;

        } else {

            newString = newString + oldString.substr(i,1);


        }

        console.log(newString);

    }

    return newString;

}






//// Main Code
//emailTrueOrFalse = checkEmail(myEmail);
//console.log("It is " + emailTrueOrFalse + " that this email is valid.");


// Calls problem 2 function
returnedString = stringSep(stringList, first, second);
console.log("The new string is " + returnedString);