// const button = document.querySelector('button');

// const click = () => {
//     console.log('You clicked me');
// }

// button.addEventListener('click', click);

const items = document.querySelectorAll('li');



items.forEach( item => {
    item.addEventListener('click', e => {
        // console.log(e.target);
        // console.log(item);
        e.target.style.textDecoration = 'line-through';
    })
});