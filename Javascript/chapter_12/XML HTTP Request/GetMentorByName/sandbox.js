//accepts link
const addForm = document.querySelector('.add');




const getMentors = (link, name) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                //store in a variable data transfer it into a JSON
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource')
            }
        });
        name.toLowerCase();
        request.open('GET', link+name);
        request.send();
    });
};

addForm.addEventListener('submit', (e, link, name) => {
    e.preventDefault();
    link = 'http://localhost:8080/mentor/getByName?name=';
    name = addForm.add.value.trim();
    getMentors(link, name).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
    addForm.reset();
});


//chaining promises
// const getName = addForm.add.value.trim();
// getMentors('http://localhost:8080/mentor/getByName?name=', getName)
    
//     .then((data) => {
//         console.log('promise 1: ', data);
//         console.log(data.name);
//     //     return getMentors('http://localhost:8080/mentor/getAllMentors');
//     // }).then((data) => {
//     //     console.log('promise 2 : ', data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//get error first before data
// getMentors('http://localhost:8080/mentor/getAllMentors',(error, data) => {
//     console.log(error,data);
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// });

//promise example

// const getSomething = () => {

//     //built in to promise API 
//     return new Promise((resolve, reject) => {
//         //do network request or fetch data
//         resolve('some data');
//         reject('some error');
//     });

// };

//first callback function fires if data is resolved
//second is fired if data is rejected
// getSomething().then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

//same as above
// getSomething().then((data) => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });