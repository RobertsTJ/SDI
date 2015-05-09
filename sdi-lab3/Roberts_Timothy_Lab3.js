// alert("JavaScript works!");

/*
 Timothy Roberts
 May 9, 2015
 SDI 1505
 Lab 3: Following a Flowchart
 */

// These are my variables
var myNameIs = " Timothy";
var myFavoriteFood = "My favorite food is \"pizza\"";
var withNumberOfToppings = 3;
var pizzaIsMyFavoriteFood = true;
var theirFavFood = "likes that food too!";
var yourNumberOfTop = 3;
var theyLikeTacos = "tacos";
var noTacosForThem = "That is the worst food in the world."

// These are my outputs
console.log("My name is " + myNameIs + ".");
console.log( myFavoriteFood + " it is delicious.");
console.log("I like " + withNumberOfToppings + " toppings on my pizza.");
console.log("It's " + pizzaIsMyFavoriteFood + "that pizza is my favorite food.");

pizzaIsMyFavoriteFood =confirm("Is pizza still your favorite food?\nClick OK for yes, or Cancel for no.");

if (pizzaIsMyFavoriteFood === true) {

    //if pizza is their favorite food
    withNumberOfToppings = parseInt(prompt("How many toppings do you like?"));


    if (withNumberOfToppings === yourNumberOfTop){
        console.log("I like " + withNumberOfToppings + " and you like " + yourNumberOfTop + " so together we like " + (withNumberOfToppings + yourNumberOfTop) + ".");
    } else {
        console.log("I won't be your friend unless you like 3 toppings!")
    }

} else {

    // If pizza is not their favorite food
    theirFavFood = prompt("What is your favorite kind of food?");


    if (theyLikeTacos === theirFavFood)

    {   console.log("Awesome, " + myNameIs + " likes " + theirFavFood + " too!");

    } else {
        console.log("That is the worst food ever.")
    }

        }
