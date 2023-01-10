const prices = [5,10,15,20,30,40,50];

const salePrices = prices.map((price) => {
    return price/2;
});

console.log(salePrices);