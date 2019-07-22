// students score, total possible score
// 15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalculator = (studentScore, totalScore) => {
    let score = (studentScore / totalScore) * 100;
    let letterGrade = '';
    if(score >89) {
        letterGrade = 'A';
    } else if(score>79) {
        letterGrade = 'B';
    } else if(score>69) {
        letterGrade = 'C';
    } else if(score>59) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (${score}%)!`;
} ;

let result = gradeCalculator(10,20);
let result2 = gradeCalculator(19,20);
console.log(result);
console.log(result2);