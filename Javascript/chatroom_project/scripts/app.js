//dom query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const updateName = document.querySelector('.new-name');
const rooms = document.querySelector('.chat-rooms');
const updateNameMessage = document.querySelector('.update-mssg');

//check local storage if a name is present
const usernameInStorage = localStorage.username ? localStorage.username : 'anon';

//update chatroom depending on the button clicked
rooms.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        //pass the id of the target
        chatroom.updateRoom(e.target.getAttribute('id'));
        //get chat again
        chatroom.getChats((chat) => {
            chatUI.render(chat);
        });
    }
});

//class instances
const chatUI = new ChatUi(chatList);
const chatroom = new Chatroom('general', usernameInStorage);

//add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get reference from DOM with ID = message
    const message = newChatForm.message.value.trim();
    //add chat returns a promise, so we can use .then and .catch
    chatroom.addChat(message)
        .then(() => {
            newChatForm.reset();
        })
        .catch((error) => {
            console.log(error);
        })
}); 

//update username
updateName.addEventListener('submit', (e) => {
    e.preventDefault();
    //get reference from DOM to get username
    const username = updateName.name.value.trim();
    chatroom.updateName(username);
    //reset form
    updateName.reset();
    //show and hide the update message
    updateNameMessage.innerText = `
        Your name was updated to ${username}
    `;
    setTimeout(() => {
        updateNameMessage.innerText = ''
    }, 3000);
});

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data);
})
