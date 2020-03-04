//! Musketeers

const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
};

musketeers.push("D'Artagnan");

musketeers.forEach(e => {
  console.log(e);
});

musketeers.pop();

for (const musketeer of musketeers) {
  console.log(musketeer);
};

//! Sum of values

const values = [3, 11, 7, 2, 9, 10];
const arrSum = arr => arr.reduce((acc, cur) => acc + cur);
console.log(`Summation is ${arrSum(values)}`);

//! Array maximum

const values = [3, 11, 7, 2, 9, 10];
const arrMax = arr => Math.max(...arr);
console.log(`Maximum value is ${arrMax(values)}`);

//! List of words

const words = [];

while (true) {
  const word = prompt("Enter a word:");

  if (word === "stop") break;

  words.push(word);
}

console.log(words);