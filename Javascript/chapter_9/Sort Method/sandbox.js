//example 1 - sort string

// const names = ['sean', 'leigh', 'nino', 'xander'];

//names.sort();
// names.reverse();
// console.log(names);

//sort numbers

const scores = [5,15,50,1,3,5,7];
scores.sort((a,b) => {
    return a-b;
});

console.log(scores);

const players = [
    {name: 'mario', score: 10},
    {name: 'luigi', score: 5},
    {name: 'xander', score: 50},
    {name: 'nino', score: 15},
    {name: 'sean', score: 50}
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     }
//     else if(b.score > a.score){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// });

//same as above
players.sort((a,b) => {
    return b.score - a.score;
});
console.log(players);
