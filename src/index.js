import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// let newNumber = numbers.map(double);

// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

// function less(num) {
//   return num < 10;
// }

// let newNumber = numbers.filter(less);

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

// function reduction(Accumulator, currentNumber) {
//   return Accumulator + currentNumber;
// }

// let newNumber = numbers.reduce(reduction);

// console.log(newNumber);

//Find - find the first item that matches from an array.

// function finding(num) {
//   return num > 10;
// }

// let newNumber = numbers.find(finding);

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

// function finding(num) {
//   return num > 10;
// }

// let newNumber = numbers.findIndex(finding);

// console.log(newNumber);

function meaning(mean) {
  return mean.meaning.substring(0, 100);
}

let newMeaning = emojipedia.map(meaning);

console.log(newMeaning);
