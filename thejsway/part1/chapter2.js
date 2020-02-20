// Improved hello

let name = prompt('What is your name and surname?');
console.log(`His/her name is ${name}.`);

// Final values

let a = 2;
a -= 1;
a++; // a = 2
let b = 8;
b += 2; // b = 10
const c = a + b * b; // 102
const d = a * b + b; // 30
const e = a * (b + b); // 40
const f = a * b / a; // 10
const g = b / a * a; // 10
console.log(a, b, c, d, e, f, g);

// VAT calculation

let rawPrice = Number(prompt('How much is raw price?')); // prompt always returns string
let finalPrice = rawPrice * (20.6 / 100) + rawPrice;
alert(finalPrice);

// From Celsius to Fahrenheit degrees

let temperature = Number(prompt("Enter a Celsius degree: "));
let fahrenDegree = temperature * (9 / 5) + 32;
alert(fahrenDegree);

// Variable swapping

let number1 = 5;
let number2 = 3;
let numberHold;

numberHold = number1;
number1 = number2;
number2 = numberHold;

console.log(number1); // Should show 3
console.log(number2); // Should show 5