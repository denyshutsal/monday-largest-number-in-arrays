"use strict";

// Monday Largest Number in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//    You can do this!
//   return arr;
// }

const arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

console.log(largestOfFour(arr));
// Returns [5,27,39,1001]

function largestOfFour(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    let el = arr[index]; // get current array
    el.sort((a, b) => a - b); // sort each array
    result.push(el[el.length - 1]); // push the last one largest number of each sorted arrays
  }

  return result;
}
