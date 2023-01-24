const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('.btn-unsub');

//append to DOM
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let author = recipe.author;
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <div>${author}</div>
            <button class="btn btn-danger btn-sm my-2">Delete</button>
        </li>
    `;
    list.innerHTML += html; 
}


//get data from firestore
// db.collection('recipes').get()
//     .then((snapshot) => {
//         //when we have the data
//         snapshot.docs.forEach((doc) => {
//             addRecipe(doc.data(), doc.id);
//         })
//     }).catch((error) => {
//         console.log(error);
//     }); 

//real time listeners, so that everytime something is added or removed, DOM is also updated
const unsub = db.collection('recipes').onSnapshot((snapshot) => {
    //cycle to array everytime a change on snapshot happens
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        }
        else if(change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    })
});

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach((recipe) => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

//add data to firestore
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const now = new Date();
    const recipe = {
        title: form.recipe.value.trim(),
        created_at : firebase.firestore.Timestamp.fromDate(now),
        author: form.author.value.trim()
    };

    db.collection('recipes').add(recipe)
        .then(() => {
            console.log('recipe added');
        })
        .catch((error) => {
            console.log(error);
        })

    form.reset();
})

//delete data
list.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){  
        //get id
        const id = e.target.parentElement.getAttribute('data-id');

        //get referencec and put to db
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('recipe deleted');
        });
    }
});

//unsub from database changes
button.addEventListener('click', () => {
    unsub();
});