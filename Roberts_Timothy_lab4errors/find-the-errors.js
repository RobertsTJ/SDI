//  NAME:  Timothy Roberts
//  DATE:  May 12, 2015
//  Scalable Data Infrastructures
//  Day 4 Lab 00
//  Assignment 2
//  Find and fix the errors

var myName = "John Doe";
var myJob  = "\"Cat Wrangler\"";
var numOfCats = 40;
var employed = true;

console.log("Hello! My name is " + myName + ".");
console.log("I'm a " + myJob + ".");
console.log("My current assignment has me wrangling " + numOfCats + " cats.");
console.log("So, let's get to work!");

while (numOfCats > 0) {
    
    if (employed = true) {
        
        console.log("I've wrangled another cat. Only " + numOfCats + " left!");
        
    } else {
        
        console.log("I've been fired! Someone else will have to wrangle the rest!");
        
    }
    
    numOfCats--;
    
    if (numOfCats === 5) {
        
        employed = false;
        
    }
    
}

