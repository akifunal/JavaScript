// !Improved hello

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
// ask user for first and last name
let firstName = prompt("Please enter your first name: ");
let lastName = prompt("Please enter your last name: ");
console.log(sayHello(firstName, lastName));

// !Number squaring

// Square the given number x
function square1(x) {
  return x * x;
};

// Square the given number x
const square2 = x => x * x;

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// !Minimum of two numbers

const min = (x, y) => (x > y) ? y : x;

let testValue = Number(prompt("Sayi girin: "));
let testValue2 = Number(prompt("Sayi girin: "));
console.log(min(testValue, testValue2));
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

// !Calculator

const calculate = (x, y, z) => (y === "+") ? x + z : (y === "-") ? x - z : (y === "*") ? x * z : (y === "/") ? x / z : "Undefined operation";

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// !Circumference and area of a circle

const circumFerence = (r) => 2 * Math.PI * r;
const areaCircle = (r) => Math.PI * (r ** 2);


console.log(`Circumference of circle with r=4 is ${circumFerence(4)}`);
console.log(`Area of circle with r=3 is ${areaCircle(3)}`);