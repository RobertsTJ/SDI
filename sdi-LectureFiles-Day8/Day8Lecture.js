/*  Timothy Roberts
    SDI 1505
    Day 8 Lecture
    May 21, 2015
 */

// alert("JavaScript works!");

// "i am batman"

// Global Variable
var ourString;

// Functions
function initialCaps(argString) {

    // Local Variables
    var newString;
    var strArray;
    var currentWord;
    var newWord = "";
    var currentChar;

    // Upper case everything
    newString = argString.toUpperCase();

    strArray = newString.split(" ");

    for (var each in strArray) {

        currentWord = strArray[each];

        for (var char in strArray[each]){

            if (char != 0) {

                currentChar = currentWord[char].toLowerCase();
                newWord = newWord + currentChar;


            } else {

                newWord = newWord + currentWord[0];

            }

        }

        newWord = newWord + " ";

    }

    return newWord;

}

ourString = prompt(" Enter a string to initial cap: ", "i am batman");

returnedString = initialCaps(ourString);

console.log(returnedString);











//// Lab Seven Review
//// Global Variables
//var array1 = [10, 6, 7, 3, 12, 5];
//var array2 = [25, 100, 4, 22, 16, 105, 2, 7];
//var array3 = [2, 3, 4, 1, 10, 27, 32, 51, 6, 100, 8, 42];
//var returnedArray;
//var numArrays = [array1, array2, array3];
//
//function bubbleSort(argArray) {
//
//    // Local Variables
//    var num1,
//        num2,
//        holder;
//
//    // Loop through the array
//    for (var newElement in argArray) {
//
//        for (var element in argArray) {
//
//            element = parseInt(element);
//
//            // Assigned array elements to variables
//            num1 = argArray[element];
//            num2 = argArray[element + 1];
//
//            // Compare to see which is greater
//            if (num1 > num2) {
//
//                holder = num1;
//                argArray[element] = num2;
//                argArray[element + 1] = num1;
//
//            }
//
//        }
//
//    }
//
//    return argArray;
//
//}
//
//// Main Code
//for (var each in numArrays) {
//
//    returnedArray = bubbleSort(numArrays[each]);
//
//    console.log("Array number " + each + " sorted is " + returnedArray);
//
