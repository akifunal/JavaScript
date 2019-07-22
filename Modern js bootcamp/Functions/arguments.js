// total, tipPercent

let calculateTip = (total, tipPercent = 0.2) => {
    return total * tipPercent;
};

let tip = calculateTip(100)
console.log(tip);
let tip2 = calculateTip(300,0.35);
console.log(tip2); 


// A 25% tip on $40 would be $10.

let getTip = (total, tipPercent) => {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
};

console.log(getTip(300,0.35));