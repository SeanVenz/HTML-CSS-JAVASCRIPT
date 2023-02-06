//sets
const names = ['haha', 'hehe', 'haha'];

const nameSet = new Set(names);
console.log(nameSet);

const uniqueNames = [...nameSet];
console.log(uniqueNames);

const setToArray = [...new Set(names)];
console.log(setToArray);

const ages = new Set();
ages.add(20);
ages.delete(20);
ages.add(30);
ages.add(10);

ages.forEach((set) => {
    console.log(set);
});


const people = new Set([
    {hihi: 'haha', huhu: 'haha'},
    {hihi: 'hehe', huhu: 'hihi'}
]);

people.forEach((person) => {
    console.log(person.hihi, person.huhu);
});

console.log(ages, ages.size, ages.has(30));
ages.clear();