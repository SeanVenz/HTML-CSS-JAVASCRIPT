// const para = document.querySelector('p');
// console.log(para);

// const error = document.querySelector('.error');
// console.log(error);

// const newError = document.querySelector('div.error');
// console.log(error);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

// console.log(paras[0]);

// //GET ELEMENT BY ID
// const title = document.getElementById('page-title');
// console.log(title);

// //GET ELEMENTS BY THEIR CLASS NAME
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//GET ELEMENTS BY THEIR TAG NAME
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML = '<h2>This is a new h2</h2>';
// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p> ${person} </p>`
// });


//UPDATE
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'The Net Ninja Website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

//CHANGE STYLE

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');

// content.onclick = function() {
//     content.classList.toggle('success');
// }

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    else if (para.textContent.includes('success')){
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
