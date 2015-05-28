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


// Create a function
//




// Start
// Global Variables
var phoneNumber = prompt("Please enter a valid phone number in the following format: xxx-xxx-xxxx ", "123-456-7890");
var numberTrueOrFalse;
var dashSymbol = "-";


// Function
function problemTwoFunction(phoneNum,dashSym) {

   // Local Variables
   var string = " ";

   // For loop through string
   for(var element = 0; element < phoneNum.length; element++) {

      string = phoneNum[element].concat(dashSym);
      console.log(string);

   }

   return 0;
}



// Main Code
problemTwoFunction(phoneNumber, dashSymbol);
console.log("Test");

// End





//function myFunction() {
//   var x, text;
//
//   // Get the value of the input field with id="numb"
//   x = document.getElementById("numb").value;
//
//   // If x is Not a Number or less than one or greater than 10
//   if (isNaN(x) || x < 1 || x > 10) {
//      text = "Input not valid";
//   } else {
//      text = "Input OK";
//   }
//   document.getElementById("demo").innerHTML = text;
//}


//function problemTwoFunction(txt, i){
//
//   i = i || 0;
//   if(txt.length != 12) return false;
//   if(i == txt.length) return true;
//   if(i == 3 || i == 7){
//      return txt[i] == "-" ? problemTwoFunction(txt, ++i) : false;
//   }
//   return isNaN(parseInt(txt[i], 10)) ? false :problemTwoFunction(txt, ++i);
//}
//
//console.log()