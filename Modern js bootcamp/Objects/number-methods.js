let makeGuess = (number) => {
    let min = 3;
    let max = 9;
    let randomNumber = Math.floor(Math.random() * (max - min + 1))+ min;
    return randomNumber === number;
};

console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));
console.log(makeGuess(2));