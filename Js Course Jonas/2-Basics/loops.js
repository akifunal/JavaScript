const places = ['Philadelphia', 'Texas', 'Vermont'];
const test = places.indexOf('Texas');
console.log(test);

// --------------------------------------------

const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const index = notes.findIndex((note, index) => {
  console.log(index);
  return note.body === 'Get a new seat';
})
console.log(index);

// ------------------------------------------

const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const findNote = (notes, noteBody) => {
  return notes.find((note) => {
    return note.body.toLowerCase() === noteBody.toLowerCase();
  });
}

const note = findNote(notes, 'Exercise. Eating a bit BETTER.');
console.log(note);


// --------------------------------------------

const todos = [{
  text: 'Order cat food',
  completed: false
}, {
  text: 'Clean kitchen',
  completed: true
}, {
  text: 'Do work',
  completed: false
}];

const getThingsToDo = (todos) => {
  return todos.filter((todo, index) => {
    return !todo.completed;
  })
}

const newList = getThingsToDo(todos);
console.log(newList);



// ------------------------------------------------


const todos = [{
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}];


const sortTodos = (todos) => {
  return todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  })
};

sortTodos(todos);
console.log(todos);


// Looping backwards

const person = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}