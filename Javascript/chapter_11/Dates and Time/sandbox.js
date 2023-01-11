// dates and times
const now = new Date();

console.log(now);

//years, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//timestamps
console.log('timestamp:', now.getTime()); 

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());