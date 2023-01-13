//link var is the http link
const getMentors = (link) => {

    //promise can either be resolved (return ok) or reject (return not Ok)
    return new Promise((resolve, reject) => {

        //returns the request
      const request = new XMLHttpRequest();
  
      request.addEventListener('readystatechange', () => {
        
        //check if status and state is Ok
        if(request.readyState === 4 && request.status === 200){
            //parses data into json so we can use json stuff
            const data = JSON.parse(request.responseText);
            resolve(data);
        } 
        else if (request.readyState === 4){
            reject('could not fetch the data');
        }
      });
      request.open('GET', link);
      request.send();
    });
  
  };
  
  //chaining promises
  getMentors('http://localhost:8080/mentor/getAllMentors').then(data => {
    console.log('promise 1 resolved:', data);
    return getMentors('http://localhost:8080/mentor/getAllMentors');
  }).then(data => {
    console.log('promise 2 resolved:', data);
    return getMentors('http://localhost:8080/mentor/getAllMentors');
  }).then(data => {
    console.log('promise 3 resolved:', data);
  }).catch(err => {
    console.log('promise rejected:', err);
  });