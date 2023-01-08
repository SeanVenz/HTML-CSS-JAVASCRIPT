const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    console.log(form.username.value);
});

//REGEX TEST
const username = 'seanvc';
const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// let result = username.search(pattern);
// console.log(result); 