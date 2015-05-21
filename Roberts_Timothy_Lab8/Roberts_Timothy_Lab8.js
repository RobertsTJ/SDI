/* Timothy Roberts
   SDI 1505
   Lab 8: Working with strings
   May 21, 2015
 */

//alert("JavaScript works!");

// Global Variable

var myIndexOf = prompt("Please enter your email address: ", "troberts@fullsail.edu");

// Function
function validateEmail(whereIsIt) {

    // Local Variables
    var where = whereIsIt.indexOf("@");
    var where2 = whereIsIt.indexOf(".");
    var where3 = whereIsIt.indexOf("");

  

    return [where, where2, where3];

}

// Main Code
validateEmail(myIndexOf);

returnedString = validateEmail(myIndexOf);

console.log("The email has a '@, ., and no spaces. They are located at " + validateEmail(myIndexOf));

