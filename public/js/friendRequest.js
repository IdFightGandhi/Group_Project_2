var rejectButtons = document.querySelectorAll('.rejectButton');
rejectButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        let frToDelete = {id: event.target.getAttribute('fr_id')};

        await fetch('/api/fr/delete', {
            method: 'DELETE',
            body: JSON.stringify(frToDelete),
            headers: { 'Content-Type': 'application/json' },
        });

        location.reload();
    });
});

var acceptButtons = document.querySelectorAll('.acceptButton');
acceptButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        let frToAccept = {
            id: event.target.getAttribute('fr_id'),
            sender_id: event.target.getAttribute('s_id'),
            receiver_id: event.target.getAttribute('r_id'),
        }

        await fetch('/api/fr/acceptfr', {
            method: 'POST',
            body: JSON.stringify(frToAccept),
            headers: { 'Content-Type': 'application/json' },
        });

        location.reload();
    });
});


var setName = (text) => {
    let queryObj = {
        id: text.getAttribute('s_id')
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


var frText = document.querySelectorAll('.frText');
frText.forEach(text => {
    setName(text);
});

