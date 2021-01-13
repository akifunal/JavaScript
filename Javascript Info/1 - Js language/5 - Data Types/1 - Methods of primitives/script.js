"use strict";
//* Can I add a string property?
//! Consider the following code:
let str = "Hello";

str.test = 5;
console.log(str.test);
alert(str.test); // Error: str not object
//! How do you think, will it work? What will be shown?
