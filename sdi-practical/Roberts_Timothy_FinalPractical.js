/* Timothy Roberts
   SDI: 1505
   May 28, 2015
   Final Practical Exam
 */

// alert("JavaScript works!");

// Problem 2
// Create a function that will determine if a string follows a pattern like a telephone
// number: 123-456-7890. Some things to remember are that the strings will contain a specific number
// characters, the dashes will appear in specific places within the pattern, and all other characters
// must be numbers. When complete, the function should return an answer, and you should use this to
// create an output to the console indicating if the number is or is not formatted correctly.

// Start
// Global Variables
var phoneNumber = prompt("Please enter a valid phone number in the following format: xxx-xxx-xxxx ", "123-456-7890");
var numberTrueOrFalse;

// Function
function checkNumber(argPhone) {

   // Local Variables
   var goodNumber = false;
   var dashSymbolFirst = argPhone.charAt(3);
   var dashSymbolLast = argPhone.charAt(7);

   // Check to see if dash is in right spot
   if (dashSymbolFirst === argPhone.charAt(3)) {

      goodNumber = true;

   } else {

      return false;

   }

   if (dashSymbolFirst === argPhone.charAt(7)) {

      goodNumber = true;

   } else {

      return false;

   }

   return goodNumber;
}


numberTrueOrFalse = checkNumber(phoneNumber);
console.log("It is " + numberTrueOrFalse + " that the phone number is valid");