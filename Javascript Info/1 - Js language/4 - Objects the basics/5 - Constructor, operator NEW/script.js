"use strict";
//* Two functions – one object
//! Is it possible to create functions A and B such as new A()==new B()?

let obj = { name: "Akif" };
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true

//* Create new Calculator
//! Create a constructor function Calculator that creates objects with 3 methods:
//!  1   read() asks for two values using prompt and remembers them in object properties.
//!  2   sum() returns the sum of these properties.
//!  3   mul() returns the multiplication product of these properties.
//! For instance:
function Calculator() {
  this.read = function () {
    this.firstValue = +prompt("Enter first value: ");
    this.secondValue = +prompt("Enter second value: ");
  };
  this.sum = function () {
    return this.firstValue + this.secondValue;
  };
  this.mul = function () {
    return this.firstValue * this.secondValue;
  };
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//* Create new Accumulator
//! Create a constructor function Accumulator(startingValue).
//! Object that it creates should:
//!     Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//!     The read() method should use prompt to read a new number and add it to value.
//! In other words, the value property is the sum of all user-entered values with the initial value startingValue.
//! Here’s the demo of the code:

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter a new number: ", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
