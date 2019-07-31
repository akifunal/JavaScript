const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Have a breakfast',
    completed: true
}, {
    text: 'Watch netflix',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Js bootcamp',
    completed: true
}];

const incompleteTodos = todos.filter((todo) => {
    return !todo.completed;
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);
todos.forEach((todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})