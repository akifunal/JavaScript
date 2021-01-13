"use strict";
function makeUser(name, age, team) {
  return {
    name,
    age,
    team,
  };
}
let user = makeUser("Akif", 26, "Test");
console.log(user);

//* Hello, object
//! Write the code, one line for each action:
//  1   Create an empty object user.
//  2   Add the property name with the value John.
//  3   Add the property surname with the value Smith.
//  4   Change the value of the name to Pete.
//  5   Remove the property name from the object.
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

//* Check for emptiness
//! Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
//! Should work like that:

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (const key in object) {
    return false; // If object has properties returns false
  }
  return true;
}

//* Sum object properties
//! We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let sum = 0;
for (const key in salaries) {
  sum += salaries[key];
}
console.log(sum);

//* Multiply numeric property values by 2
//! Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.
function multiplyNumeric(object) {
  for (const key in object) {
    if (typeof object[key] === "number") {
      object[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
