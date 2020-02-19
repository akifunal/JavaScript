const person = {
  name: "Akif",
  age: 20,
  speak() {
    console.log('test test')
  }
};
console.log(person.age);
person.speak();


const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
    getCityAndState() {
      return `${this.city} and ${this.state}`
    }
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};



// Length property
console.log(name.length)
// Convert to upper case
console.log(name.toUpperCase())
// Convert to lower case
console.log(name.toLowerCase())
let password = 'abc123asdf098'
// Includes method
console.log(password.includes('password'))


let num = 103.941
// Specify decimal points
console.log(num.toFixed(2))
// Round numbers
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Generate a random number
let randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
for (let i = 1; i <= 10; i++) {
  console.log(randomNum(5, 10));
}



// Arrays
const courses = [{
    teacher: "Kyle Simpson",
    course: "JS Function Lite"
  },
  {
    teacher: "Sarah Drasner",
    course: "Intro to Vue"
  },
  {
    teacher: "Brian Holt",
    course: "Complete Intro to React v3"
  },
  {
    teacher: "Steve Kinney",
    course: "State Management"
  }
];

console.log(courses.length);
console.log(courses[0]);
courses.pop();
console.log(courses.join(" | "));


const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// for(let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

cities.forEach((el, index) => {
  console.log(index, el);
})