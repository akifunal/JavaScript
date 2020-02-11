const A = "A";
let F;

function doStuff(B) {
  console.log(B);
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  // console.log(D); // undefined
  console.log(H); // something else 
  F = "F"; // F = F
}


let E = 0;
while (E < 3) {
  E++;
  console.log(A); // A
  const G = "G";
}
console.log(E); // 3
// console.log(G); // undefined

doStuff("B"); // B something else
// console.log(B); // undefined
// console.log(C); // undefined
console.log(F); // F