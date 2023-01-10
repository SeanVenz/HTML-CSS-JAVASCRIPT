// const scores = [10,20,30,40,50];

// const result = scores.reduce((accumulator, current) => {
//     if(current > 30){
//         accumulator ++;
//     }
//     return accumulator;
// }, 0);

// console.log(result);

const playerScore = [
    {player: 'mario', score: 10},
    {player: 'tae', score : 15},
    {player: 'mario', score: 15},
    {player: 'tae', score : 30}
];

const marioTotal = playerScore.reduce((accumulator, current) => {
    if(current.player === 'mario'){
        accumulator += current.score;
    }
    return accumulator;
}, 0);

console.log(marioTotal)