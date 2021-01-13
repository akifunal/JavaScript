"use strict";
let lolArray = ["Heimerdinger", "Heimderdinger", "Heimerdinger"];
for (const hero of lolArray) {
  alert(hero);
}

//* Array operations.
//! Let’s try 5 array operations.
//!  1   Create an array styles with items “Jazz” and “Blues”.
//!  2   Append “Rock-n-Roll” to the end.
//!  3   Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//!  4   Strip off the first value of the array and show it.
//!  5   Prepend Rap and Reggae to the array.
//! The array in the process:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
let firstValue = styles.shift();
console.log(firstValue);
styles.unshift("Rap", "Reggae");

//* Calling in an array context
//! What is the result? Why?

let arr = ["a", "b"];
console.log(arr);
arr.push(function () {
  alert(this);
});

arr[2](); // ? a, b, function() {alert(this);}

//* Sum input numbers
//! Write the function sumInput() that:
//!  1   Asks the user for values using prompt and stores the values in the array.
//!  2   Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
//!  3   Calculates and returns the sum of array items.
//! P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {
  let numbers = [];
  let value;
  while (true) {
    let value = +prompt("Enter a value: ", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(value);
  }
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

sumInput();
