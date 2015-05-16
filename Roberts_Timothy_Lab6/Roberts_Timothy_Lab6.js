/* Timothy Roberts
   SDI 1505
   May 16, 2015
   Lab 6: Working with arrays
 */

//alert("JavaScript works!");




// Start


// Function
function myFavoriteStates() {

    // Local Variables
    var stateArray = [ "Wisconsin", "California", "Virginia", "Montana" ];
    var favoritePlacesArray = [ "Green Bay", "Santa Monica", "Virginia Beach", "Missoula" ];


    // For loop through the elements of the array
    for(var i = 0 ; i < stateArray.length; i++) {

        // Stating that favoritePlacesArray is in stateArray and it's my favorite city.
        console.log(favoritePlacesArray[i] + " is my favorite city in " + stateArray[i] + ".");
    }

    
    // Array Methods
    stateArray.push("Florida");
    favoritePlacesArray.push("Pompano Beach");

    for(var i = 0 ; i < stateArray.length; i++) {

        // Stating that favoritePlacesArray is in stateArray and it's my favorite city with the .push array method.
        console.log(favoritePlacesArray[i] + " is my favorite city in " + stateArray[i] + ".");
    }
}

// Function Call
myFavoriteStates();

// End