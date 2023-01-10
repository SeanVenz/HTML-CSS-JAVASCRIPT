const products = [
    {name: 'saging', price: 10},
    {name: 'tae', price: 5},
    {name: 'tobol', price: 8},
    {name: 'igit', price: 2},
    {name: 'rawra', price: 9},
];

const filteredProducts = products.filter(product => product.price > 7)
    .sort((a,b) => {
        return a.price - b.price;
    })
    .map((product) => {
        return `The ${product.name} is ${product.price / 2} dollars`; 
    });

// filteredProducts.sort((a,b) => {
//     return a.price - b.price;
// })

// const promo = filteredProducts.map(product => {
//     return `The ${product.name} is ${product.price / 2} dollars`; 
// });


console.log(filteredProducts);