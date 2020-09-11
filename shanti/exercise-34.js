// Objects: Part 2
/* 1. Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.
    Examples:
    4, { min: 0, max: 5 }) ➞ true
    4, { min: 4, max: 5 }) ➞ true
    4, { min: 6, max: 10 }) ➞ false
    5, { min: 5, max: 5 }) ➞ true
*/
function givenRange(num, obj) {
    return num <= obj.max && num >= obj.min;
}
console.log(givenRange(4, { min: 0, max: 5 })); // true
console.log(givenRange(4, { min: 0, max: 5 })); // true
console.log(givenRange(4, { min: 6, max: 10 })); // false
console.log(givenRange(5, { min: 5, max: 5 })); // true

/* 2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
    The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
*/
function scrabbleTiles(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i].score; // sum the values of my array
    }
    return result;
}
console.log(
    scrabbleTiles([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 }
    ])
);  // 28

/* 3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
    Examples:
    {} ➞ true
    {a: 1} ➞ false
*/
function emptyObject(array) {
    return Object.keys(array).length == 0;
}
console.log(emptyObject({}));       // true
console.log(emptyObject({a: 1}));  // false

/* 4. Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
    Example:
    countLetters("tree") ➞ {t: 1, r: 1, e: 2}
*/
function countLetter(str) {
    let array = str.split("");
    let result = {};
    function countOccurrences(str, letter) {
      let counter = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
          counter++;
        }
      }
      return counter;
    }
    for (let i = 0; i < array.length; i++) {
      let currentCharacter = array[i];
      result[currentCharacter] = countOccurrences(str, currentCharacter); // function call for the inner function
    }
    return result;
}
  console.log(countLetter("tree")); // { t: 1, r: 1, e: 2 }

/* 5. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
    Examples:
    freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
    freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
    freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
*/
function freeShipping(obj) {
    let result = 0;
    let objValues = Object.values(obj); // get only values of object
    // console.log(values);
    for (let i = 0; i < objValues.length; i++) {
      result += objValues[i]; // sums all values of object
      return result > 50;
    }
}
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 })); // false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 })); // true
console.log(freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 })); // false

/* 6. Programming Object. */
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages); // [ 'JavaScript', 'Python', 'Ruby', 'Go' ]

// Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log("difficulty: ", programming.difficulty); // difficulty:  7

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming); 
/* {
    languages: [ 'JavaScript', 'Python', 'Ruby', 'Go' ],
    isChallenging: true,
    isRewarding: true,
    difficulty: 7
  }
*/

// Write a command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;
console.log(programming);
/*
{
  languages: [ 'JavaScript', 'Python', 'Ruby', 'Go' ],
  isChallenging: true,
  isRewarding: true,
  difficulty: 7,
  isFun: true
}
*/

// Using a loop, iterate through the languages array and console.log all of the languages.
for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
}
/*
    JavaScript
    Python
    Ruby
    Go
*/

// Using a loop, console.log all of the keys in the programming object.
for (let i in programming) {
    console.log(i);
}
/*
    languages
    isChallenging
    isRewarding
    difficulty
    isFun
*/

// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(programming[key]);
}
/*
[ 'JavaScript', 'Python', 'Ruby', 'Go' ]
    true
    true
    7
    true
*/

// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
function printOut() {
    if (
      programming.isChallenging === true &&
      programming.isRewarding === true
    ) {
      return `Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.`;
    }
    return printOut(); // nothing is printed because the function is not called
  
};

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.
Object.freeze(programming); // The Object.freeze() method freezes an object. A frozen object can no longer be changed;
