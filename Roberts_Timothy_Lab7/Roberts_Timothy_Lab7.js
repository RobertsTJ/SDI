/* Timothy Roberts
   SDI 1505
   Lab 7: Functions, Loops, and Arrays
   May 19, 2015
 */

// alert("JavaScript works!");




// Global Variables
var set1 = [10, 6, 7, 3, 12, 5];
var returnedArray = [];


// Functions
function bubbleSort(numArgArray) {

    // Local Variables
    var holdNum;

    for (var i = 0; i < set1.length; i++) {
        for (var t = 0; t < set1.length; t++)

        if (set1[t] > set1[t+1]) {
            holdNum = numArgArray[t];
            numArgArray[t] = numArgArray[t+1];
            numArgArray[t+1] = holdNum;

        }
    }

    // console.log(numArgArray);
    return numArgArray;
}

// Main Code
returnedArray = bubbleSort(set1);
console.log("The new order of the array is: " + returnedArray);

