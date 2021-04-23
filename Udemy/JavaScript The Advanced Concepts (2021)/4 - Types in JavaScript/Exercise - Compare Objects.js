var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2;
alert(eq); // gives false

JSON.stringify(user1) === JSON.stringify(user2); // bad performance

// Lodash's `isEqual()` checks if the two objects have the same keys
// and values:
_.isEqual(obj1, obj2); // true
