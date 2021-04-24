// Make a generic multiplyBy HOF that can make other functions like: multiplyByTwo, multiplyByTen and so on...

// You should be able to do:
const multiplyBy = (a) => (b) => a * b;

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4); // 8

multiplyBy(3)(5); // 15
