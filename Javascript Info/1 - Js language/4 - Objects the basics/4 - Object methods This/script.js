"use strict";
//* Using "this" in object literal
//! Here the function makeUser returns an object.
//! What is the result of accessing its ref? Why?
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let user = makeUser();
// alert(user.ref.name);  What's the result?  // Error no "name"
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();
console.log(user.ref().name);

//* Create a calculator
//! Create an object calculator with three methods:
//!  1   read() prompts for two values and saves them as object properties.
//!  2   sum() returns the sum of saved values.
//!  3   mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    this.number1 = +prompt("Enter first number: ", 0);
    this.number2 = +prompt("Enter second number: ", 0);
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//* Chaining
//! There’s a ladder object that allows to go up and down:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    // shows the current step
    alert(this.step);
    return this;
  },
};

//! Now, if we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1

// Such approach is widely used across JavaScript libraries.
