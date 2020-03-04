//! Word info 
const word = prompt("Enter a word");

console.log(`Length of the word: ${word.length}`);

console.log(word.toLowerCase());
console.log(word.toUpperCase());

//! Vowel count

const word = prompt("Enter a word");
const test = word.match(/[aeiıoöuü]/gi);
console.log(`Number of vowels is ${test.length}`);

//! Backwards word

const word = prompt("Enter a word");

const wordBackwards = word.split('').reverse().join('');

const wordBackwards = [...word].reverse().join('');

console.log(wordBackwards);

const reserve = str => {
  let reserved = "";
  for (const char of str) {
    reserved = char + reserved;
  }
  return reserved;
};

console.log(reserve(word));

//! Palindrome

const word = prompt("Enter a word");
const wordLower = word.toLowerCase();

// const wordBackwards = [...wordLower].reverse().join('');
// if (wordLower === wordBackwards) {
//   console.log(`${word} is a palindrome word.`);
// }

const wordChars = [...wordLower];
for (const c of wordChars) {
  if (c !== wordChars.pop()) {
    console.log(`${word} is not radaa palindrome word.`)
  } else {
    console.log(`${word} is a palindrome word.`)
  }
}