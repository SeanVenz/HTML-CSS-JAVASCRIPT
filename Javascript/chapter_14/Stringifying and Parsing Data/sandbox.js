const todos = [
    {text: 'tae', author: 'tae'},
    {text: 'tae', author: 'tae'},
    {text: 'tae', author: 'tae'}
];

//turn obkect to json format
// console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

//set again to array
const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));