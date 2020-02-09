// let gradeCalc = (score, totalScore) => {
//   let result = (score / totalScore) * 100;
//   if (result > 100) {
//     console.error();
//   } else if (result >= 90) {
//     return 'You got a A.';
//   } else if (result >= 80) {
//     return 'You got a B.';
//   } else if (result >= 70) {
//     return 'You got a C.';
//   } else if (result >= 60) {
//     return 'You got a D.';
//   } else {
//     return 'You got a F.';
//   }
// };


let gradeCalc = (score, totalScore) => {
  let result = (score / totalScore) * 100;
  let letterGrade = '';

  if (result > 100) {
    return 'You made a mistake.';
  } else if (result >= 90) {
    letterGrade = 'A';
  } else if (result >= 80) {
    rletterGrade = 'B';
  } else if (result >= 70) {
    letterGrade = 'C';
  } else if (result >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return `You got a ${letterGrade} with ${result}%.`;
};

let myGrade = gradeCalc(15, 20);
console.log(myGrade);