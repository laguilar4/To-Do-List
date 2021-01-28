const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () => {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>'+ t + '</li>'); //crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((element, indice) => {
    element.addEventListener('click', () => {
            element.parentNode.removeChild(element);
            todos.splice(indice,1);
            actualizaTodos(todos);
            render();
        })
    });
};

const actualizaTodos = (todos) =>{
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
render();
const form = document.getElementById('todo-form');
form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    actualizaTodos(todos);
    render();
}
  /* todoList.innerHTML = '';
    for(let i = 0; i < todos.length; i++){
        todoList.innerHTML += '<li>'+todos[i]+'</li>';
    }
} */
};