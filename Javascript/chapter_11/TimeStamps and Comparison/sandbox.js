// timestamp

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

//console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(days);

console.log(`the blog was written ${days} days ago`);

//converting timestamp into date object

const timestamp = 124435691966;
console.log(new Date (timestamp));
