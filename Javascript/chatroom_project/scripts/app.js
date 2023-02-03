//dom query
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const updateName = document.querySelector('.new-name');

//class instances
const chatUI = new ChatUi(chatList);
const chatroom = new Chatroom('gaming', 'tae');

//add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get reference from DOM with ID = message
    const message = newChatForm.message.value.trim();
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
    chatroom.updateName(username)
});

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data);
})
