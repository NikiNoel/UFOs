// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
}

console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
}

// Original addition function
function addition(a, b) {
    return a + b;
}

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

doubleAddition = (c, d)

=> addition(c, d) * 2;


let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(friends) {
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
    }
 }
 
 listLoop(friends)


// First, let's create a for loop to iterate through an array of vegetables. Here's our array:
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];


// Now we're going to build the for loop. The syntax is exactly the same as it was earlier.
for (var i = 0; i < vegetables.length; i++) {
}

// We're using the keyword for to initiate the loop. We also start the loop at the beginning by assigning an iterable as zero with var i = 0;. Next, we tell the loop to continue working through the array as long as the iterable ("i") is less than the number of vegetables in our array: i < vegetables.length;. Finally, we increase our iterable by 1 by adding i++; which tells JavaScript to move to the next item in the array until there are no more items. Let's say we also want each item in the array to be printed to the console. To do this, we'll add a console.log statement inside the curly brackets. Let's add a message to go with each item, too, so it will read "I love [vegetable]" with each iteration.

// The final code looks like this:

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}


// Let's practice with one more. This time we'll loop through numbers without using an array.

for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }