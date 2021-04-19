const array = [1, 2, 3];

function getMaxNumber(arr) {
  // return Math.max(...array);
  return Math.max.apply(null, arr);
}

getMaxNumber(array); // should return 3
