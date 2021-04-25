// Create our own prototypes:
const human = { mortal: true };
const socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
