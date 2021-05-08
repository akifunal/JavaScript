//1
setTimeout(() => {
	console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
	console.log("2", "can be as bad as one");
}, 10);

//2
Promise.resolve("hi").then((data) => console.log("2", data));

//3
console.log("3", "is a crowd");

//* Log will be;  Promise goes to micro tast queue
//3 is a crowd
//2 hi
//1 is the loneliest number
//2 can be as bad as one
