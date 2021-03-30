document.querySelector('.acceptFR').addEventListener('click', async (event)=>{
    event.preventDefault();
    let objToSend = {
        id: document.querySelector('.acceptFR').getAttribute('fr_id'),
        sender_id: document.querySelector('.acceptFR').getAttribute('s_id'),
        receiver_id: document.querySelector('.acceptFR').getAttribute('r_id'),
    }

    await fetch('/api/fr/acceptfr', {
        method: 'POST',
        body: JSON.stringify(objToSend),
        headers: { 'Content-Type': 'application/json' },
    });

    location.reload();
});