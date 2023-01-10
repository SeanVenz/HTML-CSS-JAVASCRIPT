//default answers
const correctAnswers =['A', 'A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

// setTimeout(() => {

// },3000);

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    //get user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //check user answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        score += 20;
    }); 

    //console.log(score);
    //show result on page

    //output the score

    scrollTo(top);
    
    result.classList.remove('d-none');
    
    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent =  output + '%'; //`${score}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output+=1;
        }
    },10);
});

//window object
// setTimeout(() => {

// },3000);

// let i = 0;
// const timer = setInterval(() =>{
//     console.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);