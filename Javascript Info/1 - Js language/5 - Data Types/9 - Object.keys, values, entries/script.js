"use strict";
//* Sum the properties
//! There is a salaries object with arbitrary number of salaries.
//! Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
//! If salaries is empty, then the result must be 0.
//! For instance:

function sumSalaries(salaries) {
  let sum = 0;
  for (const value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650

//* Count properties
//! Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user));

alert(count(user)); // 2

//! Try to make the code as short as possible.
//! P.S. Ignore symbolic properties, count only “regular” ones.

let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(typeof firstName);
console.log(typeof surname);
