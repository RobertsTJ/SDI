/* Timothy Roberts
   SDI 1505
   Lab 7: Functions, Loops, and Arrays
   May 19, 2015
 */

// alert("JavaScript works!");




// Global Variables
var set1 = [10, 6, 7, 3, 12, 5];
var set2 = [25, 100, 4, 22, 16, 105, 2, 7];

var returnedArray = [];


// Functions
function bubbleSort(numArgArray) {

    // Local Variables
    var holdNum;

    for (var i = 0; i < numArgArray.length; i++) {
        for (var t = 0; t < numArgArray.length; t++)

        if (numArgArray[t] > numArgArray[t+1]) {
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

for (var i = 0; i < 3; i++) {
    if (w = 1) {
        returnedArray = bubbleSort(set1);
        console.log("The new order of the array is: " + returnedArray);
    }if ( w = 2) {
        returnedArray = bubbleSort(set2);
        console.log("The new order of the array is: " + returnedArray);
    }


}
