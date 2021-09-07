// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log(letters[1])


// --------------------------------------
// Exercise 2 - Array Positioning

const myObj = {"friend1": "I am friend 1"};
const myObj2 = {"friend2": "I am friend 2"};
const myObj3 = {"friend3": "I am friend 3"};

const friends = [myObj, myObj2, myObj3];

console.log(friends)

// What a lonely array. Add at least 3 friend objects to it.  


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

var index = significantMathNumbers.indexOf(1729);

console.log(index)

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

console.log(diet[0], diet[1], "hamburger soda pizza", diet[2])

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket




// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


const diet2 = ["tomato", "cucumber", "rocket"];

diet2.pop()

console.log(diet2)




// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet2

console.log(dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

var everySecondValue = function (array) {
    for (i=1; i <= array.length-1; i+=2) {
      console.log(array[i]);
    }
  }
  
  everySecondValue(lettersExpanded);



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

const filter = numbers.map((number) => {
    if (number < 0 || number > 6) {
        console.log(number)
    } else {
        discardedNumbers.push(number)

    }
})

console.log(discardedNumbers);


// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


