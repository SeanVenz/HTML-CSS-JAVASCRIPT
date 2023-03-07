import {styleBody, addTitle, tae} from './dom'; 
import users from './data';

console.log('index file');
addTitle('hekhok');
styleBody();
users.forEach((user) => {
    console.log(user.name, user.premium);
});
console.log(tae);