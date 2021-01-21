"use strict";

function pow(x, n) {
  // if (n === 0) {
  //   return 1;
  // } else if (x === 1) {
  //   return x;
  // } else {
  //   return x * pow(x, n - 1);
  // }
  return n === 0 ? 1 : n === 1 ? x : x * pow(x, n - 1);
}
