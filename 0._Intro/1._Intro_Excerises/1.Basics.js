// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is", firstName, "and my last name is", lastName);


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

// Parser så godt som muligt
console.log(parseInt(year) + number);

// Vil give fejl hvis det ikke er et number.
console.log(Number(year) + number);

// Plus foran konverterer String til number
console.log(+year + number);


// --------------------------------------
