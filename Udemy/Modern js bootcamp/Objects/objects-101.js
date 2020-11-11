// Andrew is 27 and lives in Philadelphia.
// Increase age by 1 and print message again.

let myFriend = {
    name: 'Andrew',
    age: 27,
    location: 'Philadelphia'
}
console.log(`${myFriend.name} is ${myFriend.age} and lives in ${myFriend.location}.`);

const increaseAge = () => { return myFriend.age += 1 };
increaseAge();
console.log(`${myFriend.name} is ${myFriend.age} and lives in ${myFriend.location}.`);