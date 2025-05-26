
//<li class="list-group-item d-flex justify-content-between align-items-center">
//<samp>Finish the samin bro - Laravel project</samp>
//<button class="btn btn-danger btn-sm  ">Delete</button>
//</li>

let todos=[];


const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');

const listItems =document.getElementById('todo-list')




function renderTodos() {
    listItems.innerHTML =''; // Clear the list before rendering

    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
        <samp>${index}. ${todo}</samp>
        
        <button class="btn btn-danger btn-sm" onclick="removeTodo(${index})">Delete</button>
        `;
        listItems.appendChild(li);
    }
    );
}




addButton.addEventListener('click', () => {


   
    todos.push(todoInput.value);
    todoInput.value = ''; // Clear the input field after adding
    renderTodos();
   


    
   

});

function removeTodo(index) {
    todos.splice(index, 1); // Remove the todo at the specified index
    renderTodos(); // Re-render the list
    alert('Todo removed successfully');
}
