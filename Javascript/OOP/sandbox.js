//oop

//create object
class User {
    constructor(username, email){
        //setup properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    //functions
    logout(){
        console.log(`${this.username} has logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

//inheretance
class Admin extends User{
    constructor(username, email, title){
        super(username, email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter((u) => {
            return u.username !== user.username;
        });
    }
}

//setting up usermade functions to prototype
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
        return this;
}

//testing
const userOne = new User('tae', 'tae');
const userTwo = new User('tobol', 'tobol');
const userThree = new Admin('igit', 'igit', 'hehe');
userOne.login();
userOne.incScore().incScore();

let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(users);