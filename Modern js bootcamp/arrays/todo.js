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


const deleteTodo = (todoList, todoText) => {
    const index =  todoList.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })

    if(index > -1) {todoList.splice(index,1);}
    
};


const getThingsToDo = (list) => {
    return list.filter((item) => {
        return !item.completed ;
    })

};

const sortTodos = (todos) => {
    todos.sort((a,b) => {
        if(!a.completed && b.completed) {
            return -1;
        }
        else if (!b.completed && a.completed){
            return 1;
        }
        else {
            return 0;
        }
    });

}


sortTodos(todos);
console.log(todos);




//console.log(getThingsToDo(todos));


// deleteTodo(todos, 'Do work');

// console.log(todos);

