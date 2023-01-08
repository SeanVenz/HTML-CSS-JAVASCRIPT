const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    alert('You copied me!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos - ${e.offsetX} y post - ${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
    console.log(e);
    box.textContent = `x pos - ${e.pageX} y post - ${e.pageY}`
});