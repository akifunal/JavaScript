const notes = ['Note 1', 'Note 2', 'Note 3'];

notes[2] = 'This is now the new note 3';

notes.forEach(function(item,index) {
    console.log(item);
    console.log(index);
})

console.log(notes.length);
console.log(notes);

