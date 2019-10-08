// 1. Number Within Range

// function withinRange(num, obj) {
//    if (num >= obj.min && num <= obj.max) {
//        return true;
//    } else {
//        return false;
//    }
// }

// console.log(withinRange(4, { min: 4, max: 5 }));

// 2. Return Keys and Values

//     function returnKeysValues(obj) {
//         let keyArr = Object.keys(obj);
//         let valueArr = Object.values(obj);
//         return [keyArr, valueArr];
//     }

//    console.log(returnKeysValues({ a: 1, b: 2, c: 3 }));

// 3. Scrabble

// let scrabbleHand = [
//     { tile: "N", score: 1 }, 
//     { tile: "K", score: 5 }, 
//     { tile: "Z", score: 10 }, 
//     { tile: "X", score: 8 }, 
//     { tile: "D", score: 2 }, 
//     { tile: "A", score: 1 }, 
//     { tile: "E", score: 1 }
// ];

// function calcScrabbleScore(tiles) {
//     let total = 0;
//     for (let i = 0; i < tiles.length; i++) {
//         total += tiles[i]['score'];
//     }
//     return total;
// }

// console.log(calcScrabbleScore(scrabbleHand));

// 4. Empty Object? 

// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty({}));
// console.log(isEmpty({ a: "a" }));
// console.log(isEmpty({1 : 1}));

// // Object.is() does not coerce values, i.e., in the  way that the `==` operator does, and so Object.is({}, {}) returns false, not true, which is not helpful to us in this use case.

// 5. Free Shipping

// function freeShipping(object) {
//     const orderArray = Object.values(object);
//     let total = 0;
//     for (let i = 0; i < orderArray.length; i ++) {
//         total += orderArray[i];
//     }
//     return total > 50;
// }

// console.log(freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));

// console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));

// console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));


// 6. Programming Object

// var programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };

// programming.languages.push("Go");

// programming.difficulty = 7;

// delete programming.jokes;

// programming.isFun = true;

// console.log(programming);

// for (let i = 0; i < programming.languages.length; i ++) {
//     console.log(programming.languages[i]);
// };

// const myKeysArr = Object.keys(programming);
// for (let i = 0; i < myKeysArr.length; i++) {
//     console.log(myKeysArr[i]);
// }

// const myValuesArr = Object.values(programming);
// for (let i = 0; i < myValuesArr.length; i++) {
//     console.log(myValuesArr[i]);
// }

// programming.worthwhile = function() {
//     if (programming.isChallenging === true && programming.isRewarding === true) {
//         return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
//     }
// }

// //`console.log` itself uses the Object.keys() method on objects, which can only return enumerable properties. For example, since functions are not enumerable, we only see `[Function]`, when we console.log(programming).

// Object.seal(programming);

// delete programming.languages;

// console.log(programming);