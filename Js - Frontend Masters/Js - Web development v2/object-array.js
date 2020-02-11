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



const test = {
  benim: {
    name: "Akif",
    surName: "Unal"
  },
  getName() {
    console.log(this.benim.name);
  }

}

test.getName();