"use strict";
//* Translate border-left-width to borderLeftWidth
//! Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//! That is: removes all dashes, each word after dash becomes uppercased.
//! Examples:
camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

//* Filter range
//! Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
//! values higher or equal to a and lower or equal to b and return a result as an array.
//! The function should not modify the array. It should return the new array.
//! For instance:

function filterRange(arr, a, b) {
  return arr.filter((number) => number >= a && number <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (matching values)

alert(arr); // 5,3,8,1 (not modified)

//* Filter range "in place"
//! Write a function filterRangeInPlace(arr, a, b) that gets an array arr and
//! removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//! The function should only modify the array. It should not return anything.
//! For instance:

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr); // [3, 1]

//* Sort in decreasing order
let arr = [5, 2, 1, -10, 8];
//! ... your code to sort it in decreasing order
arr.sort((a, b) => b - a);
console.log(arr); // 8, 5, 2, 1, -10

//* Copy and sort array
//! We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//! Create a function copySorted(arr) that returns such a copy.
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted(arr) {
  let sortedArray = arr.slice();
  return sortedArray.sort((a, b) => (a > b ? 1 : -1));
}

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

//* Map to names
//! You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
//! For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
console.log(names);
alert(names); // John, Pete, Mary

//* Map to objects
//! You have an array of user objects, each one has name, surname and id.
//! Write the code to create another array from it, of objects with id and fullName,
//! where fullName is generated from name and surname.
//! For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);

//* Sort users by age
//! Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
//! For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

//* Sort users by age
//! Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
//! For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(arr));
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

//* Shuffle an array
//! Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//! Multiple runs of shuffle may lead to different orders of elements. For instance:
function shuffle(array) {
  array.sort((a, b) => Math.random() - 0.5);
}

//* Get average age
//! Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
//! The formula for the average is (age1 + age2 + ... + ageN) / N.
//! For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
  return users.reduce((result, user) => (result + user.age, 0)) / users.length;
}

console.log(getAverageAge(arr));

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

//* Filter unique array members
//! Let arr be an array.
//! Create a function unique(arr) that should return an array with unique items of arr.
//! For instance:

function unique(arr) {
  return arr.filter((v, i, a) => a.indexOf(v) === i);
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));

alert(unique(strings)); // Hare, Krishna, :-O

//* Create keyed object from array
//! Let’s say we received an array of users in the form {id:..., name:..., age... }.
//! Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

console.log(groupById(users));
