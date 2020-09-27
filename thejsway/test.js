function eucDistance(a, b) {
  return a
    .map((x, i) => Math.abs(x - b[i]) ** 2) // square the difference
    .reduce((sum, now) => sum + now) // sum
    **
    (1 / 2)
}
// now use it with any array
// make sure both arrays have the same number of elements
let euc = eucDistance([3, 0], [3, 4]);
console.log(euc);