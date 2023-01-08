//function expression
// const speak = function(name){
//     console.log(`good day ${name}`);
// };

// speak('sean');  

//returm statement
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }
// console.log(calcArea(5));



//ARROW FUNCTION

//radius = parameter

// const calcArea = (radius) =>{
//     return 3.14 * radius**2;
// }

// const greet = () => 'hello world';

// const bill = (products, tax) => {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(greet());
// console.log(bill([10,15,30], 0.2));

//CALLBACK

// const myFucn = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFucn(function(value){
//     //do something
//     console.log(value);
// });

//FOREACH

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

const ul = document.querySelector('.people'); 

const  people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;