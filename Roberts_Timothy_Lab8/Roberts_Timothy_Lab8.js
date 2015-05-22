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
// Start
// Global Variables
var firstStr = "987654321";
var secondStr = ",";
var thirdStr = "/";


//Function
function stringsProblemTwo(elementStr,firstSep,secondSep) {

    // Local Variables
    var fourthString =" ";

    // For Loop Through Strings
    for(var element = 0;element < elementStr.length; element++ ){

            fourthString = elementStr[element].concat(firstSep);
            console.log(fourthString);
    }

    // Second Loop
    for(var element = 0;element < elementStr.length; element++){

        fourthString = elementStr[element].concat(secondSep);
        console.log(fourthString);
    }

return 0;
}

//Main Code
stringsProblemTwo(firstStr,secondStr,thirdStr);
console.log("These are the numbers separated.");

// End