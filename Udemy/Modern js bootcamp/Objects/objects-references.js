let myAccount = {
    name: 'Akif T',
    expanses: 0,
    income: 0
}

let addExpense = (account,amount) => {
    account.expanses += amount;
};

let addIncome = (account,amount) => {
    account.income += amount;
};

const resetAccount = (account) => {
    account.expanses = 0;
    account.income = 0;
} ;

const getAccountSummary = (account) => {
    let balance = account.income - account.expanses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expanses} in expenses.`;
};

addIncome(myAccount, 3000);
addExpense(myAccount, 1000);
addExpense(myAccount, 250);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));