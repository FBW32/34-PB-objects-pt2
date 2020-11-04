//1

function isNumberInrange({ min, max }, number) {
  let object = { min: min, max: max };
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumberInrange({ min: 6, max: 13 }, 7));
console.log(isNumberInrange({ min: 10, max: 13 }, 4));

//2
function scrabble(array) {
  const sum = array.map((element) => element.score).reduce((a, b) => a + b, 0);
  return sum;
}

console.log(
  scrabble([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);

//3
function isItEmptyObj(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
console.log(isItEmptyObj({ a: 1 }));
console.log(isItEmptyObj({}));

//4
function returnCountingLetterl(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    const key = str.charAt(i);
    if (result[key] == undefined) {
      result[key] = 1;
    } else {
      result[key] = result[key] + 1;
    }
  }
  return result;
}
console.log(returnCountingLetterl("soroosh"));

//5
function shippingCost(obj) {
  let totalCost = 0;
  for (let key in obj) {
    totalCost += obj[key];
    if (totalCost >= 50) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(shippingCost({ Sponge: 3.5, Soap: 5.99 }));
console.log(shippingCost({ "Surround Sound Equipment": 499.99 }));

//6

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

programming.languages.push("Go");
console.log(programming["languages"]);
///
programming["difficulty"] = 7;
console.log(programming["difficulty"]);
//
delete programming.jokes;
console.log(programming);
//
programming["isFun"] = true;
console.log(programming);
//
let myresult = programming["languages"];
for (let key in myresult) {
  console.log(myresult[key]);
}
//
for (let key in programming) {
  console.log(programming[key]);
}
//
if (
  programming["isChallenging"] == true &&
  programming["isRewarding"] == true
) {
  console.log(
    `Learning the programming languages: ${programming["languages"]} is rewarding and challenging `
  );
}

//
function challenging(obj) {
  let programming = obj;
  if (
    programming["isChallenging"] == true &&
    programming["isRewarding"] == true
  ) {
    console.log(
      `Learning the programming languages: ${programming["languages"]} is rewarding and challenging `
    );
  }
}
challenging(programming);
