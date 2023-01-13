//fetch API

fetch('http://localhost:8080/mentor/getAllMentors').then((data) => {
    return data.json();
})
.then((data) => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});