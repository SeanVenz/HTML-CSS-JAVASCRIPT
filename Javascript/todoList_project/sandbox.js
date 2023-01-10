const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

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

list.addEventListener('click', (e) => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});