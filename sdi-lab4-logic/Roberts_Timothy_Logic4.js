 /* NAME:  Timothy Roberts
    DATE:  May 12, 2015
    Scalable Data Infrastructures
    Day 4 Lab
    Using logical operators
*/


 //
 //
 //var p;
 //var q;
 //var r;
 //
 //p = confirm("First value:   Click OK for true or Cancel for false.");
 //q = confirm("Second value:  Click OK for true or Cancel for false.");
 //r = confirm("Third value:   Click Ok for true or Cancel for false.");
 //
 //
 //if (p && q) {
 //    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
 //} else {
 //    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
 //}


//  Word Problem 1
//  Start
//  Variables
var ticketPrice = 12;
var discountPrice = 7;
var age;


//  Prompt
age = parseInt(prompt ("Enter your age please:"));


if (age >= 55 || age <10) {
    // If your age is older than 55 or less than 10.
    console.log("You get a ticket price of $" + discountPrice + ".");

} else {
    // If your age is between 10 and 54.
    console.log("You get a ticket price of  $" + ticketPrice + ".");

}
//  End




//// Word Problem 2
//// Variables
//// Start
//var frontLeftTire;
//var frontRightTire;
//var backLeftTire;
//var backRightTire;
//
//// Prompts asking the user to put there tire pressure in
//frontLeftTire = prompt("Enter the tire pressure for the front left tire: ");
//frontRightTire = prompt("Enter the tire pressure for the front right tire: ");
//backLeftTire = prompt ("Enter the tire pressure for the back left tire: ");
//backRightTire = prompt ('Enter the tire pressure for the back right tire: ');
//
//// Conditional
//if ((frontLeftTire === frontRightTire) && (backLeftTire === backRightTire)) {
//    //If the tires have the same air pressure in the front two tires and same tire pressure in the back two tires opposite of the front.
//    console.log("The tires are perfect.");
//
//} else {
//
//    // If there is a difference in air pressure in the two front or the two back tires.
//    console.log("You need to re-evaluate your tire pressure situation.");
//}
////End


