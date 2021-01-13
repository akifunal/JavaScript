"use strict";

//* Sum numbers from the visitor
//! Create a script that prompts the visitor to enter two numbers and then shows their sum.

//! Run the demo

//! P.S. There is a gotcha with types.

let number1 = +prompt("Enter first number: ", 0);
let number2 = +prompt("Enter second number: ", 0);
alert(`Result is ${number1 + number2}`);

//* Why 6.35.toFixed(1) == 6.3?
//! According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

//! For instance:

alert((1.35).toFixed(1)); // 1.4

//! In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

alert((6.35).toFixed(1)); // 6.3
// How to round 6.35 the right way?

//* Repeat until the input is a number

//! Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
//! The resulting value must be returned as a number.
//! The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
//! Run the demo
//! Open a sandbox with tests.

function readNumber() {
  let number;
  do {
    number = prompt("Enter a number: ", 0);
  } while (!isFinite(number));

  if (number === null || number === "") return null;

  return alert(number);
}

readNumber();

//* An occasional infinite loop
//! This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
} // bitwise

//* A random number from min to max
//! The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
//! Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
//! Examples of its work:

function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert(random(1, 5)); // 1.2345623452

//* A random integer from min to max
//! Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
//! Any number from the interval min..max must appear with the same probability.
//! Examples of its work:
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5
