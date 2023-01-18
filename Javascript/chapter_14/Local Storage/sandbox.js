//store data in local storage
localStorage.setItem('name', 'Sean');
localStorage.setItem('age', 21);

//get data from local storage
let name = localStorage.getItem('name');
console.log(name);
let age = localStorage.getItem('age');
console.log(age);

//updating data
localStorage.setItem('name', 'Tae');
name = localStorage.getItem('name');
localStorage.age = 50
console.log(name);
age = localStorage.getItem('age');
console.log(age);

//deleting data
localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name);

//remove all item
localStorage.clear();