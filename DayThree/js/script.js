/*
Timothy Roberts
SDI 1505
Day Three
 */

// alert("javascript works!");

// Initial Variable
var myName = "Timothy";
var newName = "";
var lastName = "";

// prompt for user input
newName = prompt("Please enter your first name:");

// Create our first conditional
if (newName === myName) {

    lastName = prompt("Please enter your last name:");

    if (lastName === "Roberts")
    {

        // if first name is correct and last name is correct
        console.log("Greetings, " + myName + " " + lastName);

    } else {

        // if first name is correct and last name is incorrect
        console.log("Sorry, you're from the wrong family!");

    }

} else {

    // if the first name is wrong
    console.log("Intruder Alert!");

}



// new variables for data type tests
var myNumber = 0;
var secondNumber = 5;

myNumber = parseInt(prompt("Enter the number 5."));

if (myNumber === secondNumber){
    console.log("They match exactly!");

} else {

    console.log("The data types are wrong!");

}

