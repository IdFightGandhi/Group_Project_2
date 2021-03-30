const my_id = document.querySelector('.mainCont').getAttribute('my_id');
var other_id = '';


var updateChat = () => {
    if(other_id == ''){
        return;
    }
    
    console.log(`listening to ${my_id} and ${other_id} conversation`);
    fetch('/api/message/listen/'+other_id+'/'+my_id, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        let stringToAppend = '';
        data.forEach(sentMessage => {
            if(sentMessage.sender_id == my_id){
                stringToAppend += `<div style="display: flex; justify-content: flex-end;">
                <p style="background-color: rgb(226, 137, 35); padding-left: 15px; padding-right: 15px; border-radius: 15px; margin: 2px 10px; font-size: 20px; color: whitesmoke;">${sentMessage.message}</p>
            </div>`
            } else {
                stringToAppend += `<div style="display: flex; justify-content: flex-start;">
                <p style="background-color: rgb(99, 99, 230); padding-left: 15px; padding-right: 15px; border-radius: 15px; margin: 2px 10px; font-size: 20px; color: whitesmoke;">${sentMessage.message}</p>
            </div>`;
            }
        });
        document.querySelector('.messsageHolder').innerHTML = stringToAppend;
        document.querySelector('.messsageHolder').scrollTop = document.querySelector('.messsageHolder').scrollHeight;
    });
}

var setName = (text) => {
    let queryObj = {
        id: text.getAttribute('f_id')
    };
    fetch('/api/user/findbyid', {
        method: 'PUT',
        body: JSON.stringify(queryObj),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => {
        text.innerHTML = data.name;
    });
};


var frText = document.querySelectorAll('.friendChat');
frText.forEach(text => {
    setName(text);
    text.addEventListener('click', () => {
        document.querySelector('.chatName').innerHTML = text.innerHTML;
        other_id = text.getAttribute('f_id');
        updateChat();
    });
});


document.querySelector('.sendButton').addEventListener('click', async () => {
    let messageToSend = document.querySelector('#messageInput').value;
    document.querySelector('#messageInput').value = '';


    if(messageToSend == '' || other_id == ''){
        return;
    }

    console.log(`sending ${messageToSend} to ${my_id} and ${other_id} conversation`);

    let messageObj = {
        message: messageToSend,
        sender_id: my_id,
        receiver_id: other_id
    };

    await fetch('/api/message/send', {
        method: 'POST',
        body: JSON.stringify(messageObj),
        headers: { 'Content-Type': 'application/json' },
    });

    updateChat();
});

setInterval(updateChat, 2000);