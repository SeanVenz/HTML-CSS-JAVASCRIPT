//async && await

const getMentors = async() => {
    const mentors = await fetch('http://localhost:8080/mentor/getAllMentors');
    
    if(mentors.status !== 200){
        throw new Error('Something went wrong');
    }
    
    const data = await mentors.json();
    return data;
};

getMentors()
    .then((data) => {
        console.log('resolved: ', data);
    })
    .catch((error) => {
        console.log('error: ', error.message);
    });

// fetch('http://localhost:8080/mentor/getAllMentors').then((data) => {
//     return data.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// });