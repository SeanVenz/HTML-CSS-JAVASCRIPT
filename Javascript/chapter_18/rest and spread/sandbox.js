//rest parameter
let sum = 0;
const double = (...nums) => {
    nums.forEach((num) => {
        sum += num;
    }) ;
    console.log(sum);
};


double(1,2,3,4,5);

//spread syntax (arrays)
const people = ['ako', 'tae', 'hehe'];
console.log(...people);
const members = ['hehe', 'huhu', ...people];
console.log(members);

//spread syntax (objects)

const person = { 
    name: 'tae', age: 30, job: 'hehe'
};
const clone = {...person};
console.log(clone);
