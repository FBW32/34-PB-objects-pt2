//**1. Check if a number is within a given range.**
//Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

function numInRange(num,obj) {
    if (num >= obj.min && num <= obj.max) {
        return true
    } else{
        return false
    }
}

console.log(numInRange(2,{min:0, max: 5})); // true
console.log(numInRange(7,{min:3, Mmx: 6})); // false

//Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

let indTitle = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ];


function scoreMax(player){

  let maxPoint = player.reduce((item,total) => item + total.score,0);
       if (maxPoint <= 28) {
           return `player Max score ==> ${maxPoint}`;
       } else {
           return " out of range"
       }
} ;

console.log(scoreMax(indTitle)); //player Max score ==> 28

//**3. Is it an empty object?**
//Write a program that returns true if an object is empty, and false if otherwise.

function emptyObject(obj) {
    if (Object.keys(obj)) {
        //console.log(obj);
        if (Object.keys(obj).length === 0) {
            return true
        }
         return false
    }
}

console.log("is this Object empty",emptyObject({})); // true
console.log("is this Object empty", emptyObject({a: 1 , b: 60})); // false

//**4. Counting Letters.**
//Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

function countLetters(string){
    let strArr = string.split("")
    let count = strArr.reduce((item, tot) => (item[tot] =  ++item[tot] || 1, item), {});

    console.log(count);
}


countLetters("stressfree") // { s: 3, t: 1, r: 2, e: 3, f: 1 }


//const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr]|| 1, prev), {});


//console.log(countOccurrences(['t','r','e','e','s'])); // { t: 1, r: 1, e: 2, s: 1 }

// **5. Free Shipping.**
//Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

function freeShipping(products) {
    const objToArr = Object.values(products)
    //console.log(obj);
    //let total = objToArr.reduce((item,total)=> item + total,0);

    let total = 0;
    objToArr.map((item)=> total+= item);
    return total > 50;
}

console.log(freeShipping({ "Sponge": 10.50, "Soap": 5.99 })); //false
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));  // true 
console.log(freeShipping({ "Wool": 23.99, "Knitting Needles": 15.50, "Bag": 13.99})) // false;

// 6. Programming Object.

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };

   //let langW = "go";
   //programming['languages'] = ["JavaScript", "Python", "Ruby","go"]
   
   programming['languages'].push("go");
   console.log(programming); 

    //{
  //languages: [ 'JavaScript', 'Python', 'Ruby', 'go' ],
  //isChallenging: true,
  //isRewarding: true,
  //difficulty: 8,
  //jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
 //}


   programming.difficulty = 7;

   console.log(programming); 

       //{
  //languages: [ 'JavaScript', 'Python', 'Ruby', 'go' ],
  //isChallenging: true,
  //isRewarding: true,
  //difficulty: 7,
  //jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
 //}


   delete programming.jokes;

   console.log(programming); 
   // {
  //languages: [ 'JavaScript', 'Python', 'Ruby', 'go' ],
  //isChallenging: true,
  //isRewarding: true,
  //difficulty: 7,
// }

   programming.isFun = true;
   console.log(programming); 

 // {
  //languages: [ 'JavaScript', 'Python', 'Ruby', 'go' ],
  //isChallenging: true,
  //isRewarding: true,
  //difficulty: 7,
  //isFun: true
// }

   
 console.log(Object.keys(programming)); // [ 'languages', 'isChallenging', 'isRewarding', 'difficulty', 'isFun' ]

      
console.log(Object.values(programming)); // [ [ 'JavaScript', 'Python', 'Ruby', 'go' ], true, true, 7, true ]

   
function progLang() {
    if (programming.isChallenging === true && programming.isRewarding === true) {
        return console.log(`learning the  language ${programming.languages} is rewarding and challenging`);
    }
}

progLang({programming}); // learning the  language JavaScript,Python,Ruby,go is rewarding and challenging
