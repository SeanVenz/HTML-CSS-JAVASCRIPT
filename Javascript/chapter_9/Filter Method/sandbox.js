const scores = [10, 20, 30, 40, 5, 15];

// const filtered = scores.filter(score => {
//     return score > 20;
// });

// console.log(filtered);

const users = [
    {name: 'Sean', premium: true},
    {name: 'Leigh', premium: false},
    {name: 'Niño', premium: false},
    {name: 'Xander', premium: true},
];

const premiumUsers = users.filter(user => {
    return user.premium;
});

console.log(premiumUsers);