const prices = [5,10,15,20,30,40,50];

// const salePrices = prices.map(price =>  price/2);
// console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 10},
    {name: 'green shells', price: 30}
];

const updatedProducts = products.map((product) => {
    if(product.price > 0){
        return {name: product.name, price: product.price /2} //protect original array

        //change original array
        //product.price = product.price /2
        //return product
    }
    else{
        return product;
    }
})

console.log(updatedProducts);