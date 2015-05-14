/* Timothy Roberts
   SDI 1505
   May 14, 2015
   Day 5 lecture
 */

// Testing code while you go along is called alpha testing.

// alert("JavaScript works!");



















// Fun with functions
// Global Variables
var globalName = "Timothy";
var returnedValueVariable;
var checkedName;

// Functions
function nameFetcher(){

   var myName = prompt("Enter your name: ", "Tim");

   return myName;

}

function nameChecker(nameArgument) {

   var trueName;

 if (nameArgument === "Optimus") {
    trueName =  true;
 } else {
    trueName = false;
 }

   return trueName;

   // console.log("Hey! Look at me!");  This never shows up since it's after the return
}


// Main code
returnedValueVariable = nameFetcher();

checkedName = nameChecker(returnedValueVariable);

if (checkedName) {
   console.log("Greetings and welcome!");
} else {
   console.log("Intruder alert!");
}











//var foo = 1;
//var bar = 2;
//var baz = 3;
//
//console.log(foo + " " + bar +  " " + baz);






//// Review of Lab4: Logical Operators Q1.
//var fullPrice = 12;
//var discount  = 5;
//var age;
//
//
//age = parseInt(prompt("Enter the customers age: ")); // Always returns a string
//
//
//if (age >= 55 || age < 10){
//   console.log("Your discounted price is $" + (fullPrice - discount) + ".");
//} else {
//   console.log("No discount for you. Please pay $" + fullPrice + ".");
//}


//
//// Review of Lab4: Logical Operators Q2.
//
////Variables
//var frontRight = parseFloat(prompt("Enter the PSI for the front right tire:"));
//var frontLeft  = parseFloat(prompt("Enter the PSI for the front left tire:"));
//var rearLeft   = parseFloat(prompt("Enter the PSI for the rear right tire:"));
//var rearRight  = parseFloat(prompt("Enter the PSI for the rear right tire:"));
//
//if (frontRight === frontLeft && rearRight === rearLeft) {
//   console.log("Your tire pressures are equal in the front and equal in the rear.");
//
//} else {
//   console.log("There is problem with your tire pressures. Please check them. ");
//}




//// Loop Example
//var frontRight = parseFloat(prompt("Enter the PSI for the front right tire:"));
//var frontLeft  = parseFloat(prompt("Enter the PSI for the front left tire:"));
//var rearLeft   = parseFloat(prompt("Enter the PSI for the rear right tire:"));
//var rearRight  = parseFloat(prompt("Enter the PSI for the rear right tire:"));
//var tirePressure;
//var tireLocation;
//
//for (var i = 0; i < 4; i++){
//
//   if (i === 0){
//      tireLocation = "front right"
//   } else if (i === 1){
//      //first time through the loop
//      tireLocation = "front left"
//   } else if (i === 2){
//      //second time through the loop
//      tireLocation =  "rear right"
//   } else {
//      //fourth time through the loop
//      tireLocation = "rear left"
//   }
//
//   tirePressure = parseFloat(prompt("What is the tire pressure of the " + tireLocation + "tire?"));
//
//   if (i === 0){
//      frontRight = tirePressure;
//   } else if (i === 1){
//      //first time through the loop
//      frontRight = tirePressure
//   } else if (i === 2){
//      //second time through the loop
//      rearRight = tirePressure;
//   } else {
//      //fourth time through the loop
//      rearLeft = tirePressure;
//   }
//if (frontRight === frontLeft && rearRight === rearLeft){
//
//}
//
//}