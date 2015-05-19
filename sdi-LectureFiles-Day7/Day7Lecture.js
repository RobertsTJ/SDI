/* Timothy Roberts
   SDI 1505
   Day 7 Lecture Coding
   May 19, 2015
 */

// alert("JavaScript works!");

// Global Variable
var numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
var returnedArray = [];



var userPrompt = prompt("Enter 'odd' to return odd numbers or 'even' to return even numbers.");

while (userPrompt != "odd" && userPrompt != "even") {

       userPrompt = prompt("Hey, stupid! Enter 'odd' or 'even'");

}

// Function
function evenArray(argArray, oddOrEven) {

    // Local Variables
    var newArray = [];
    var modNum;
    var zeroOrOne;

    if (oddOrEven === "odd") {

        zeroOrOne = 1;
    } else {

        zeroOrOne = 0;

    }

    for (var i = 0; i < argArray.length; i++) {

        modNum = argArray[i] % 2;

        if (modNum === zeroOrOne) {

            newArray.push(argArray[i]);


        }

    }

    return newArray;
}

// Main Code
returnedArray = evenArray(numberArray, userPrompt);

console.log("The " + userPrompt + " number array is " + returnedArray + ".");

































//// Lab 6 Review
//
//// Function
//function authorFunction() {
//
//
//    // Local Arrays
//    var authors = [ "Charles Dickens", "William Shakespeare", "Mark Twain", "Hunter S. Thompson"];
//    var titles = [ "Oliver Twist", "Hamlet", "Tom Sawyer", "Fear and Loathing in Las Vegas"];
//
//
//    // For loop to go through array items
//    // Output each element
//    for (var i = 0; i < authors.length; i++) {
//
//        console.log(authors[i] + " wrote " + titles[i] + ".");
//
//    }
//
//    // Use an array method to alter the arrays
//    authors.push("Dorothy Allison");
//    titles.push("Bastard Out of Carolina");
//
//    // Do a final output of the change
//    console.log("I added " + authors[i] + " who wrote " + titles[i] + ".");
//    // You can also use authors[authors.length - 1]
//
//}
//
//// Main code
//authorFunction();