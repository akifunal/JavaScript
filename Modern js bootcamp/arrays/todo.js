const todos = ['wake up', 'breakfast', 'netflix', 'work', 'js bootcamp'];

todos.splice(2,1);
todos.push('Play games');
todos.shift();1

console.log(`You have ${todos.length} todos!`);

todos.forEach(function (todo,index) {
    const num = index + 1;
    console.log(`${num}. ${todo} `);
})

// 1. The first item
// 2. The second item

