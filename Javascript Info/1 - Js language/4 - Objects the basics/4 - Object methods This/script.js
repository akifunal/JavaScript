"use strict";

let user = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);
console.log(clone);
