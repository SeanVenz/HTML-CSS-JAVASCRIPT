const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;

};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get value from input form and trim it so there is no white space
    const todo = addForm.add.value.trim();

    //check if there is a value in the input form   
    if(todo.trim().length > 0){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todo
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterToDo = (searchedToDo) => {
    //convert html collection into array and logging into console in order to use array functions
    Array.from(list.children)
        //filters array and returns a todo that has the same value in the searchedToDo variable
        .filter((todo) => 
            //returns to do that dont have the same content as searched to dos and change their display to none to show only
            //the todo that has the same content
            !todo.textContent.toLowerCase().includes(searchedToDo)
        )
        .forEach((todo) => 
            todo.classList.add('filtered')
        );

    //the same as top except when user is deleting searched input, it also removes the filtered method which shows back the other 
    //todos
    Array.from(list.children)
        .filter((todo) => 
            todo.textContent.includes(searchedToDo)
        )
        .forEach((todo) => 
            todo.classList.remove('filtered')
        );
};

//search and filter todos
search.addEventListener('keyup', () => {
    const searchedToDo = search.value.trim().toLowerCase();
    filterToDo(searchedToDo);
});