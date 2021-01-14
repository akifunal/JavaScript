"use strict";
//* Filter unique array members
//! Let arr be an array.
//! Create a function unique(arr) that should return an array with unique items of arr.
//! For instance:
function unique(arr) {
  return Array.from(new Set(arr));
}
let values = [
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
console.log(unique(values));
alert(unique(values)); // Hare, Krishna, :-O

//* Iterable keys
//! We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
//! But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

//! Error: keys.push is not a function
keys.push("more");

//! Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(keys);
console.log(typeof map.keys());
