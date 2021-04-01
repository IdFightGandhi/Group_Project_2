var emailInput = document.querySelector('#emailInput');
var passwordInput = document.querySelector('#passwordInput');
var subButton = document.querySelector('#loginSubmitButton');

subButton.addEventListener('click', async (event)=>{
    event.preventDefault();
    let objToSend = {
        emailInput: emailInput.value,
        passwordInput: passwordInput.value,
    }

    const response = await fetch('/api/user/loginuser', {
        method: 'POST',
        body: JSON.stringify(objToSend),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Your login has failed, try a different password');
      }

    
});


document.querySelector('#signupButton').addEventListener('click', (event) =>{
    event.preventDefault();
    document.location.replace('/signup');
})