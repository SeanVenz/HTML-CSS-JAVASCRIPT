const list = document.querySelector('ul');

//append to DOM
const addRecipe = (recipe) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li>
            <div>${recipe.title}</div>
            <div>${time}</div>
        </li>
    `;
    list.innerHTML += html; 
}


//get data from firestore
db.collection('recipes').get()
    .then((snapshot) => {
        //when we have the data
        snapshot.docs.forEach((doc) => {
            addRecipe(doc.data());
        })
    }).catch((error) => {
        console.log(error);
    }); 

