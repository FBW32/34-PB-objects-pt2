/* 1. 
Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true */

function range(num) {
    if (num > 0 && num < 5) {
        return true;
    } else {
        return false
    }
}console.log(range(7)); // false

/* 2. 
Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ] 

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28*/

    const newAlphabet = {a: 1,e: 1,i: 1,o: 1,u: 1,l: 1,n: 1,r: 1,s: 1,t: 1,d: 2,g: 2,b: 3,c: 3,m: 3,p: 3,f: 4,h: 4,v: 4,w: 4,y: 4,k: 5,j: 8,x: 8,q: 10,z: 10,};
      
      const scrabbleScore = word =>
        word.split('').map(letter => newAlphabet[letter]).reduce((a, b) => a + b);

        console.log(scrabbleScore("cat"));  // 5



/* 3. 
Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true
{a: 1} ➞ false */

let xx = {
    name: "Maja",
    age: 40,
    country: "Poland"
};
let yy = {};
function objectFullOrEmpty(obj) {
    return Object.keys(obj).length === 0;

}
console.log(objectFullOrEmpty(xx));  // false
console.log(objectFullOrEmpty(yy));  // true

/* 4. 
Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

Example:

countLetters("tree") ➞ {t: 1, r: 1, e: 2} */

/* function countLetters(str) {
    let sum = '';
    for (let i = 0; i < str.length; i ++)
    sum += sum[i];
}
console.log(countLetters ("tree")); */


function countLetters(string) {
    let counter = {};
    for (let i=0; i<string.length; i++) {
        let character = string.charAt(i);
        if (counter[character]) {
           counter[character]++;
        } else {
           counter[character] = 1;
        }
    }

    return counter;
};
console.log(countLetters("tree"));

/* 5. 
Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false */

let x = { 
    "Sponge": 3.50, 
    "Soap": 5.99 
}
const freeShipping = obj => Object.values(obj).reduce((a, b) => a + b);

let cc = (freeShipping(x));
console.log(cc);  // 9.49

if (cc > 50) {
    console.log("free shipping");
} else {
    console.log("free shipping when total cost of items exceeds €50");  // free shipping when total cost of items exceeds €50
} 

/* 6. 
Programming Object. */

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
/* Write the command to add the language "Go" to the end of the languages array.
 */
programming.languages.push("go");

console.log(programming);

// Change the difficulty to the value of 7.

programming.difficulty = 7;
console.log(programming);

//Using the delete keyword, write the command to remove the jokes key from the programming object.

delete programming.jokes;

console.log(programming);

// Write a command to add a new key called isFun and a value of true to the programming object.

programming.isFun = "true";

console.log(programming);

//Using a loop, iterate through the languages array and console.log all of the languages.

for (let i = 0; i < programming.languages.length; i++) {
console.log(programming.languages[i]);
}

// Using a loop, console.log all of the keys in the programming object.

/* for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
} */

Object.keys(programming).forEach(key => {
    console.log(key)
   })

//Using a loop, console.log all of the values in the programming object.

//for (let i =0; i < programming.length; i++) {
  //  console.log(key, value);
//}

Object.entries(programming).forEach(
   ([key, value]) => console.log(key, value)
);

/* Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why */

function ChallenginRewarding(params) {
if (programming.isChallenging == true && programming.isRewarding==true) {
    return "Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging";
}
}
console.log(ChallenginRewarding(programming)); 