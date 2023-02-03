//render chat templates to dom
//clear list of chat when room changes

class ChatUi{
    //get reference from the DOM
    constructor(list){
        this.list = list;
    }
    render(data){
        //set date using a library
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            {addSuffix: true}
        );
        //create html and inject it to the dom
        const html = 
        `
            <li class = "list-group-item">
                <span class = "username">${data.username}:</span>
                <span class = "message">${data.message}</span>
                <div class = "time">${when}</div>
            </li>
        `;
        this.list.innerHTML += html;
    }
}