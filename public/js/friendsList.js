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


var frText = document.querySelectorAll('.friendText');
frText.forEach(text => {
    setName(text);
});


var profileButtons = document.querySelectorAll('.profileButton');
profileButtons.forEach(button => {
    
    button.addEventListener('click', (event) => {
        let userParam = button.getAttribute('f_id');

        location.replace(`/userProfile/${userParam}`);
    });
});