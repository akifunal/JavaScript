"use strict";
function showMenu({ title = "Menu", width: w = 100, height: h = 200 } = {}) {
  console.log(`Title: ${title} Width: ${w} Height: ${h}`);
}

showMenu();

//* Destructuring assignment
//! We have an object:

let user = {
  name: "John",
  years: 30,
};

//! Write the destructuring assignment that reads:
//!     name property into the variable name.
//!     years property into the variable age.
//!     isAdmin property into the variable isAdmin (false, if no such property)

const { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

//* The maximal salary
//! There is a salaries object:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

//! Create the function topSalary(salaries) that returns the name of the top-paid person.
//!     If salaries is empty, it should return null.
//!     If there are multiple top-paid persons, return any of them.
//! P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(salaries) {
  let max = 0;
  let maxName = null;
  for (let [person, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = person;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
