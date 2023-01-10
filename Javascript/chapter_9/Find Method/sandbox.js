const scores = [10000,20,5,0,50,60,70];

const firstHighScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHighScore)