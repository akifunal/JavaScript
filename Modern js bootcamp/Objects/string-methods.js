// isValidPassword
// length is more than 8 - and it doesn't contain the word password
const isValidPassword = (password) => {
    // if(password.length > 8 & !password.includes('password')){
    //     return true;
    // } else {
    //     return false;
    // }
    return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfasdpasswordasd'));