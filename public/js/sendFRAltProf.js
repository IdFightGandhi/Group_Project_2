document.querySelector('.sendFR').addEventListener('click', async (event)=>{
    event.preventDefault();
    let objToSend = {
        sender_id: document.querySelector('.sendFR').getAttribute('s_id'),
        receiver_id: document.querySelector('.sendFR').getAttribute('r_id'),
    }

    await fetch('/api/fr/create', {
        method: 'POST',
        body: JSON.stringify(objToSend),
        headers: { 'Content-Type': 'application/json' },
    });

    location.reload();
});