const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.append(li);
    // ul.prepend(li);
    
});

// const items = document.querySelectorAll('li');

// items.forEach( item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in LI');
//         //stop bubbling
//         e.stopPropagation();
//         e.target.remove();
//     })
// });

ul.addEventListener('click', e => {
    // console.log('event in UL');
    if(e.target.tagName === 'LI'){
        e.target.remove();
    } 
});