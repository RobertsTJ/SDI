/* Timothy Roberts
   SDI 1505
   May 26, 2015
   Lab 10: Problem-solving
 */

// alert("JavaScript works!");


// Start
// Global Variables
var lotteryPrompt = prompt("Would you like to play the Powerball or the Florida Lottery");
var returnedQuickPick;
var poppedNumber;

// Function
function lotteryFunction(argLottery) {

    // Local Variables
    var returnNum = [];

    // If conditional for Powerball
    if (argLottery === "Powerball") {

        for(var i = 0; i < 5; i++) {

            returnNum.push(Math.round(Math.random() * (59 - 1) + 1));
        }

        returnNum.push(Math.round(Math.random() * (35 - 1) + 1));

    }
    // If conditional for Florida Lottery
    if (argLottery === "Florida Lottery") {

        for(var i = 0; i < 6; i++) {

            returnNum.push(Math.round(Math.random() * (53 - 1) + 1));

        }
    }

    return returnNum;

}

// Main Code
returnedQuickPick = lotteryFunction(lotteryPrompt);

// Conditional if the user chose "Powerball"
if (lotteryPrompt === "Powerball") {
    poppedNumber = returnedQuickPick.pop();
    console.log("Your quick pick numbers for the Powerball are: " + returnedQuickPick + " with a Powerball of " + poppedNumber + ".");

// Conditional if the user chose "Florida Lottery"
} else if (lotteryPrompt === "Florida Lottery") {
    console.log("Your Florida Lottery quick pick numbers are: " + returnedQuickPick + ".");
}
// End
