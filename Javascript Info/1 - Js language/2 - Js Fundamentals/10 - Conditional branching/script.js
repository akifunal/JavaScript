"use strict";
//* if (a string with zero)
//! Will alert be shown ?
//   if ("0") {
//     alert('Hello');
//   }  // will be shown

//* The name of JavaScript
//! Using the if..else construct, write the code which asks: ‘What is the“ official” name of JavaScript ? ’
//! If the visitor enters“ ECMAScript”, then output“ Right!”, otherwise– output : “Didn’ t know ? ECMAScript!”

// let userAnswer = prompt("What is the 'official' name of JavaScript ? ");
// if (userAnswer === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("Didn't know? ECMAScript!");
// }

//* Show the sign
//!  Using if..else, write the code which gets a number via prompt and then shows in alert:
//!  1, if the value is greater than zero,
//! -1, if less than zero,
//!  0, if equals zero.
//! In this task we assume that the input is always a number.

// let inputNumber = +prompt("Enter a number: ");
// if (inputNumber > 0) {
//   alert(1);
// } else if (inputNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//* Rewrite 'if' into '?'
//! Rewrite this if using the conditional operator '?':

// let result = (a + b < 4) ? "Below" : "Over";

// Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’ s recommended to split the code into multiple lines.

let message = (login === 'Employee') ? 'Hello' :
  (login === "Director") ? "Greetings" :
  (login === "") ? "No login" :
  "";