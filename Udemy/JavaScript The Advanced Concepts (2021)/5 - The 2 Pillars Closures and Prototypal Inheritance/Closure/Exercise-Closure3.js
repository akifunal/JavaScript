//First solution
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index " + array[i]);
  }, i * 1000);
}

//* Second solution
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  //IIFE to create closure for every iteration
  ((index) =>
    setTimeout(function () {
      console.log("I am at index " + array[index]);
    }, index * 1000))(i);
}

//--
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  logItem(i);
}

function logItem(index) {
  setTimeout(function () {
    console.log("I am at index " + array[index]);
  }, i * 1000);
}

//--
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(
    function (loopIndex) {
      console.log("I am at index " + array[loopIndex]);
    },
    i * 1000,
    i
  );
}

//--
const array = [1, 2, 3, 4];
array.forEach((i) =>
  setTimeout(function () {
    console.log("I am at index " + i);
  }, i * 1000)
);
