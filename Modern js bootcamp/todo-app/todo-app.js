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

const filters = {
    searchText: ''
};

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
    })
    
    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach((todo) => {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo.text;
        document.querySelector('#todos').appendChild(todoEl);
    });
}

renderTodos(todos, filters);



// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log('Add a new todo...');
})


// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', (e) => {
    console.log(e.target.value);
})


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})