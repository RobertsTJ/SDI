/* Timothy Roberts
   SDI 1505
   May 14, 2015
   Lab 5: Using Functions
 */

//alert("JavaScript works!");

// Global Variables
var input1 = parseFloat(prompt("Please enter your first number: "));
var input2 = parseFloat(prompt("Please enter your second number: "));
var total;
var symbol = prompt("Do you want to + , - , * , or /? ");


// Function 1 for addition
function addition(numAdd1, numAdd2) {
    var plus =  numAdd1 + numAdd2;

    return plus;

}


// Main code
if ( symbol === "+") {
    total = addition(input1, input2);
    console.log("Your answer is " + total + ".");
}