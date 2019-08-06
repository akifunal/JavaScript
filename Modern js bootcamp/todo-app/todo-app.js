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
    searchText: '',
    hideCompleted: false
};

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    // filteredTodos = filteredTodos.filter((todo) => {
    //     // return !filters.hideCompleted || !todo.completed;
    //     // // if(filters.hideCompleted) {
    //     // //     return !todo.completed
    //     // // }else {
    //     // //     return true;
    //     // // }
    // })

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

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false})
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});