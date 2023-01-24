//create class
class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    //add chat documents
    async addChat(message){
        //format chat object

        //get date
        const now = new Date();

        //create chat object to be saved to db
        const chat = {
            message:message,
            username : this.username,
            room : this.room,
            created_at : firebase.firestore.Timestamp.fromDate(now)
        };

        //save chat document to db
        const response = await this.chats.add(chat);    
        return response;
    }

    //set real time listener everytime there is change in db
    getChats(callback){
        this.chats.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if(change.type === 'added'){
                    //update the UI
                }
            });
        });
    }

}

const chatroom = new Chatroom('gaming', 'ssean');

chatroom.addChat('hi guys')
    .then(() => {
        console.log('chat added'); 
    })
    .catch((error) => {
        console.log(error);
    })