/* Timothy Roberts
   SDI 1505
   May 16, 2015
   Lab 6: Working with arrays
 */

//alert("JavaScript works!");




// Global Variables



// Function
function myFavoriteStates() {

    // Local Variables
    var stateArray = [ "Wisconsin", "Virginia", "California", "Montana", "Florida" ];
    var favoritePlacesArray = [ "Green Bay", "Virginia Beach", "Santa Monica", "Missoula", "Pompano Beach" ];



    // For loop through the elements of the array
    for(var i = 0 ; i < stateArray.length; i++) {

        // Stating that favoritePlacesArray is in stateArray and it's my favorite city.
        console.log(favoritePlacesArray[i] + " is my favorite city in " + stateArray[i] + ".");

    }
}

// Function Call
myFavoriteStates();

// Output
console.log("These are my favorite cities in these states.")