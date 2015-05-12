/*
Timothy Roberts
SDI 1505
Day 4
Lecture Coding
May 12, 2015
 */

// alert("JavaScript works!");


// Variables
//    one for first name
//    one for last name
//    a comma after first var allows you not to enter var and make a list
//var firstName = "Timothy",
//    lastName =  "Roberts",
//    yourFirstName,
//    yourLastName;
//
//// prompts
//// ask user for first name
//// ask user for last name
//yourFirstName = prompt("Enter a name: ", "Timothy");
//yourLastName = prompt("Enter your last name: ", "Type your last name here");
//
//if (yourFirstName === firstName && yourLastName === lastName) {
//    console.log("You are correct, sir!");
//} else {
//    console.log("Intruder alert!");
//}







//// While loop example
//var myNumber = 10;
//
//while (myNumber < 15) {
//    console.log("My number is " + myNumber);
//    myNumber = myNumber + 1;
//    //myNumber++;  //++ is plus one and -- is minus one
//}
//
//console.log("The loop is done.");
//
//// For loop example
//for (var i = 0; i <= 10; i++){
//    console.log("i is equal to " + i);
//}
//




// 99 bottles of beer on the wall

for (var beer = 99; beer >= 1; beer--){

    if ( beer === 1){
        console.log(beer + " bottle of beer on the wall");
        console.log(beer + " bottle of beer!");
    } else {
        console.log(beer + " bottles of beer on the wall");
        console.log(beer + " bottles of beer!");
    }

    console.log("Take one down, pass it around, ");

    if (beer > 2){

        // As long as beer is greater than 2, we need the plural of bottles
        console.log((beer - 1) + " bottles of beer on the wall.");

    } else if (beer == 1) {

        // When beer equals 1, we indicate no more bottles left
        console.log("No more bottles of beer on the wall.");

    } else {

        // When beer equals 2, we need the singular bottle.
        console.log((beer - 1) + " bottle of beer on the wall.");
    }

    console.log("  ");

}
