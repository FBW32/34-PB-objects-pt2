//**1. Check if a number is within a given range.**
function checkTheRenge(num, obj) {
  console.log(typeof obj.max);
  if (num >= obj.min && num <= obj.max) {
    return true;
  } else {
    return false;
  }
}
console.log(checkTheRenge(4, { min: 0, max: 5 }));

//**2. Scrabble.**
let scrabble = (arr) => {
  let result = 0;
  for (let obj of arr) {
    result = result + obj.score;
  }
  return result;
};
let exampleArr = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
console.log(scrabble(exampleArr)); //28

//**3. Is it an empty object?**
let isEmpty = (obj) => {
  let arr = Object.keys(obj);
  if (arr.length !== 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isEmpty({})); //true

//**4. Counting Letters.**
function countLetters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let howmany = 0;
    let letter = str[i];
    let strBeforeLetter = str.slice(0, i);
    //check if there is the same letter before.
    if (strBeforeLetter.indexOf(letter) == -1) {
      //str icinde o harf icin kac tane var diye tara.
      for (let n = 0; n < str.length; n++) {
        if (str[n] == letter) {
          howmany += 1;
        }
      }
      obj[letter] = howmany;
    }
  }
  return obj;
}

console.log(countLetters("tree")); //{ t: 1, r: 1, e: 2 }

//**5. Free Shipping.**

let isFreeShipping = (obj) => {
  let arrOfValues = [];
  for (element in obj) {
    arrOfValues.push(obj[element]);
  }
  let sum = 0;
  for (item of arrOfValues) {
    sum = sum + item;
  }
  if (sum >= 50) {
    return true;
  } else {
    return false;
  }
};
console.log(isFreeShipping({ Sponge: 3.5, Soap: 5.99 })); //false

//**6. Programming Object.**
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);

// - Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty); //7
// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
// - Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;

// - Using a loop, iterate through the languages array and console.log all of the languages.
for (language of programming.languages) {
  console.log(language);
}
// - Using a loop, console.log all of the keys in the programming object.
for (keys in programming) {
  console.log(keys);
}
// - Using a loop, console.log all of the values in the programming object.
for (keys in programming) {
  console.log(programming[keys]);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.

let myObject = {
  createResult: function () {
    if (this.isRewarding == true && this.isChallenging == true) {
      let message =
        'Learning the programming languages: "' +
        this.languages +
        '" are  challenging and rewarding.';
      return message;
    }
  },
};
Object.assign(programming, myObject);
console.log(programming.createResult());

// **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.

//console.log(createResult()); //ReferenceError: createResult is not defined
//creteResult method is defined in an object, it means it has blockscope. you cant use it out of the object. if you want to do that, you should call it by targetting correctly : object.methodName()
