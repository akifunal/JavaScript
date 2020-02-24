// Carousel

let turn = Number(prompt("Enter a number"));
for (let i = 1; i <= turn; i++) {
  console.log(`${i}.turn`);
}
// ----------
let turn = prompt("Number of turns: ");
let i = 1;
while (i <= turn) {
  console.log(`${i}.turn`);
  i++;
};

// Parity

let initialNumber = Number(prompt("Enter a number: "));
for (let i = 1; i <= initialNumber; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even.`);
  };
  if (i % 2 === 1) {
    console.log(`${i} is odd.`);
  };
};

// Input Validation

let number = 51;
while (number > 50 && number < 100) {
  number = Number(prompt("Enter a number: "));
  console.log(`${number} is between 50 and 100.`);
}

// Multiplication Table

let number = Number(prompt("Enter a number: "));
for (let i = 0; i <= number; i++) {
  console.log(`${number} * ${i} = ${number*i}`);
};
// 
let number = Number(prompt("Enter a number: "));
let i = 0;
while (number > 2 && number < 9) {
  console.log(`${number} * ${i} = ${number*i}`);
  i++;
  if (i === 11) {
    break;
  };
};

// Neither yes nor no

let word = "";
while (word !== "yes" || word !== "no") {
  word = prompt("Enter a word: ");
  console.log(word);
};

// FizzBuzz Solution

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  };
};