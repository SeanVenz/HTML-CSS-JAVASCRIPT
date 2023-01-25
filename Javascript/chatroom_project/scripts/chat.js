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
        this.chats
            //get documents from a certain collection where a certain condition is true. eg. genereal, gaming
            .where('room', '==', this.room)

            //order the created at to output latest
            .orderBy('created_at')
            
            //listen to changes in firebase
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                  if(change.type === 'added'){
                    //update ui for each change 
                    callback(change.doc.data());
                  }
                });
            });
    }

}

const chatroom = new Chatroom('gen', 'tae');

chatroom.addChat('gg')
    .then(() => {
        console.log('chat added'); 
    })
    .catch((error) => {
        console.log(error);
    })

chatroom.getChats((data) => {
    console.log(data);
})