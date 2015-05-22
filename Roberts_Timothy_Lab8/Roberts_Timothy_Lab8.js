/* Timothy Roberts
   SDI 1505
   Lab 8: Working with strings
   May 21, 2015
 */

//alert("JavaScript works!");

//// Problem 1
//// Start
//// Global Variables
//var validateEmail = prompt("Please enter a email address: ", "troberts@fullsail.edu");
//var returned;
//
//// Function
//function email(argString) {
//
//    // Local Variables
//    var oneAt = argString.indexOf("@");
//    var twoAt = argString.lastIndexOf("@");
//    var oneSpace = argString.indexOf(" ");
//    var oneDot = argString.lastIndexOf(".");
//
//
//    // If Statments
//    if (oneAt == -1) {
//        return false;
//
//    } else if (twoAt != oneAt){
//
//        return false;
//
//    } else if (oneDot == -1) {
//        return false;
//
//    } else if (oneSpace == 0) {
//        return false;
//
//    } else {
//        return true;
//    }
//}
//
//// Main code
//returned = email(validateEmail);
//console.log(validateEmail + " is a " + returned + " email.");
//
//// End



// Problem 2
// Global Variables
var string = "t, j, r";
var oneSep = ",";
var twoSep = "/";

// Function
function splitString(argString, sep1, sep2) {

    // Local Variables
    var newString;

    newString = argString.toUpperCase();


    // Test console to see if code works
    console.log(newString);

}

splitString(string);
