document.querySelector('#logOutLink').addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch('/api/user/logout', {
        method: 'POST'
    });
    document.location.replace('/');

});