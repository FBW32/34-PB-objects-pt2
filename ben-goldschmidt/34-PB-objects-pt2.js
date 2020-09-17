// # Objects: Part 2

console.log("")
console.log("QUESTION 1. Check if a number is within a given range.")
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:
let q1Array1 = [4, { min: 0, max: 5 }];    // ➞ true
let q1Array2 = [4, { min: 4, max: 5 }];    // ➞ true
let q1Array3 = [4, { min: 6, max: 10 }];   // ➞ false
let q1Array4 = [5, { min: 5, max: 5 }];    // ➞ true


let checkRange = (arrayInput) => {
    console.log(`Is ${arrayInput[0]} between ${arrayInput[1].min} and ${arrayInput[1].max}?`)

    if ((arrayInput[0] >= arrayInput[1].min) && (arrayInput[0] <= arrayInput[1].max)) {
        console.log(`That is `, true)
    }
    else {
        console.log(`That is `, false)
    }
};
checkRange(q1Array1);
checkRange(q1Array2);
checkRange(q1Array3);
checkRange(q1Array4);

// Is 4 between 0 and 5?
// That is  true
// Is 4 between 4 and 5?
// That is  true
// Is 4 between 6 and 10?
// That is  false
// Is 5 between 5 and 5?
// That is  true




console.log("")
console.log("QUESTION 2. Scrabble.")
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
let player1 = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

let scrabble = (scrabbleScore) => {
    // console.log(scrabbleScore)
    // console.log(scrabbleScore.length)
    // console.log(scrabbleScore[0])
    // console.log(scrabbleScore[0].tile)
    // console.log(scrabbleScore[0].score)
    let letters = [];
    let scores = [];
    let totalScore = 0;
    for (i = 0; i < scrabbleScore.length; i++) {
        letters += scrabbleScore[i].tile + " "
        scores += scrabbleScore[i].score + " "
        totalScore += scrabbleScore[i].score
    }
    console.log(`With the letters`, letters)
    console.log(`gives the points`, scores)
    console.log(`And adds up to `, totalScore)
}
scrabble(player1);
// With the letters N K Z X D A E 
// gives the points 1 5 10 8 2 1 1 
// And adds up to  28





console.log("")
console.log("QUESTION 3. Is it an empty object?")
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

let existObject1 = {};          // ➞ true
let existObject2 = { a: 1 };    // ➞ false

let existingFunction = (...testExist) => {
    console.log(`For`, testExist);
    if (Object.keys(testExist[0]).length === 0) {
        console.log(true, `This object is empty!`)
    }
    else {
        console.log(false, `This object is NOT empty!`)
    }
}
existingFunction(existObject1);
existingFunction(existObject2);





console.log("")
console.log("QUESTION 4. Counting Letters.")
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}

let countString1 = "tree";
let letterCount = 1;

let countLetters = (countStringInput) => {
    orderString = countStringInput.split("").sort().join("");
    // console.log(orderString)
    let newLetterCountObject = {};
    for (let i = 0; i < countStringInput.length; i++) {
        if (countStringInput[i] === countStringInput[i + 1]) {
            letterCount++;
        }
        else {
            newLetterCountObject = countStringInput[i] + ": " + letterCount;
            console.log(newLetterCountObject)
            letterCount = 1;
        }
    }
};
countLetters(countString1);




console.log("")
console.log("QUESTION 5. Free Shipping.")
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false

let freeShipping = (shippingInput) => {
    // console.log(shippingInput)
    // console.log(Object.keys(shippingInput))
    // console.log(Object.values(shippingInput))

    let totalShippingValue = 0;
    let valueArray = [];
    let keysArray = [];
    let shippingResult;

    for (i = 0; i < Object.values(shippingInput).length; i++) {
        valueArray = Object.values(shippingInput)
        totalShippingValue += valueArray[i];

        keysArray = Object.keys(shippingInput);

        if (totalShippingValue >= 50) {
            shippingResult = `${true} ---> Shipping is available!`;
        }
        else {
            shippingResult = `${false} ---> Shipping is NOT available!`;
        }
    }
    console.log(`To ship --->`, keysArray)
    console.log(`It would have a total order cost of ===>`, totalShippingValue.toFixed(2));
    console.log(shippingResult);
    console.log("")
}
freeShipping({ "Sponge": 3.50, "Soap": 5.99 });
freeShipping({ "Surround Sound Equipment": 499.99 });
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 });






console.log("")
console.log("QUESTION 6. Programming Object.")
// ```javascript
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// ```

// - Write the command to add the language "Go" to the end of the languages array.

// - Change the difficulty to the value of 7.
// - Using the delete keyword, write the command to remove the jokes key from the programming object.
// - Write a command to add a new key called isFun and a value of true to the programming object.
// - Using a loop, iterate through the languages array and console.log all of the languages.
// - Using a loop, console.log all of the keys in the programming object.
// - Using a loop, console.log all of the values in the programming object.
// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
