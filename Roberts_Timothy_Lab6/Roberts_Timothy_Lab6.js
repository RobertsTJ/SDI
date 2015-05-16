/* Timothy Roberts
   SDI 1505
   May 16, 2015
   Lab 6: Working with arrays
 */

//alert("JavaScript works!");




// Global Variables
var returnPlaceAndState;


// Function
function myFavoriteStates() {

    // Local Variables

    var stateArray = [ "Wisconsin", "Virginia", "California", "Montana", "Florida" ];
    var favoritePlacesArray = [ "Lambeau Field", "Virginia Beach", "Santa Monica Pier", "Glacier National Park", "Pompano Beach" ];
    var addState;
    var placeAndState;


    // For loop through the elements of the array
    for(var i = addState ; i < stateArray.length; i++) {

        addState + stateArray[i];


    }

    // Average of the total
    placeAndState = addState / stateArray.length;

    // Return the final average
    return (placeAndState);

}

returnPlaceAndState = myFavoriteStates();

console.log("My favorite places in these states are " + returnPlaceAndState + ".");