const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const hour = now.getHours(); 
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span> Time is ${hour} : ${minute} : ${seconds}</span>
    `

    clock.innerHTML = html;
};

setInterval(tick, 1000);