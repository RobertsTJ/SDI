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


//
//// Problem 2
//// Send string in to the function
//// Return it as a number
//// Determine if the string sent into the function is a number before you do the conversion.
//
//// Start
//// Global Variables
//var num = (prompt("Please enter a number: ", "987"));
//var varReturn = stringNumber(num);
//
//// Function
//function stringNumber(argPrompt) {
//
//    // Local Variables
//    var returnedString;
//
//    if (isNaN(argPrompt)) {
//
//        returnedString = ("This is not a number.");
//
//    } else {
//
//        returnedString = parseFloat(argPrompt);
//
//    }
//
//    return returnedString;
//
//}
//
//// Main Code
//console.log(varReturn);
//
//// End



// Problem 3
// Create a function that is the difference of two dates
// Function requires 3 parameters: First two are dates to compare, 3rd is string to return hours or days
// Function will do math to find the difference
// Output in a meaningful way

// Start
// Global Variables
var oneDate = prompt("Please enter a date in this format: ", "05/23/2015");
var twoDate = prompt("Please enter a date in this format: ", "05/31/2015");
var dayOrHour = prompt("Please enter days or hours: ");


// Function
function dateDifferFunction (oneD, twoD) {

    // Local Variables
    var oneD = new Date(oneD);
    var twoD = new Date(twoD);
    var dateDiffer = oneD - twoD;

    if (dayOrHour === "hours"){

        dateDiffer = Math.abs(dateDiffer / 1000 / 60/ 60);
        console.log("You chose hours.")

    } else if (dayOrHour === "days") {

        dateDiffer = Math.abs(dateDiffer / 1000 / 60/ 60 / 24);
        console.log("You chose days.")

    }

    return dateDiffer;

}

// Main Code
returnedDates = dateDifferFunction(oneDate,twoDate);
console.log("There are " + returnedDates + " in between your chosen dates.");

// End