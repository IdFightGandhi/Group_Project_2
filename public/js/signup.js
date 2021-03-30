var nameInputr = document.querySelector('#user-name');
var zipInputr = document.querySelector('#user-zip');
var emailInputr = document.querySelector('#email');
var pswInputr = document.querySelector('#psw');
var pswInputr2 = document.querySelector('#psw-repeat');
var alertBox = document.querySelector('.alert-danger');
var successBox = document.querySelector('.alert-success')

document.querySelector('.registerbtn').addEventListener('click', (event) => {
    console.log('register button hit');
    alertBox.style.display = 'none';
    successBox.style.display = 'none';
    event.preventDefault();

    if(nameInputr.value == ''){
        alertBox.innerHTML = 'name field cannot be blank';
        alertBox.style.display = 'block';
        return;
    }
    if(zipInputr.value == ''){
        alertBox.innerHTML = 'zipcode field cannot be blank';
        alertBox.style.display = 'block';
        return;
    }
    if(emailInputr.value == ''){
        alertBox.innerHTML = 'email field cannot be blank';
        alertBox.style.display = 'block';
        return;
    }
    if(pswInputr.value == '' || pswInputr2.value == ''){
        alertBox.innerHTML = 'password fields cannot be blank';
        alertBox.style.display = 'block';
        return;
    }
    if(pswInputr.value != pswInputr2.value){
        alertBox.innerHTML = 'passwords do not match';
        alertBox.style.display = 'block';
        return;
    }

    let newUserObjToSend = {
        name: nameInputr.value,
        email: emailInputr.value,
        password: pswInputr.value,
        zip: zipInputr.value,
        age: 0,
        bio: 'I love animals and the people that love animals! :)',
        pict: 'https://res.cloudinary.com/dj63qafw1/image/upload/v1617137602/logo_ifkbzn.png',
    };

    fetch('/api/user/create', {
        method: 'POST',
        body: JSON.stringify(newUserObjToSend),
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        if( response.status == 200){
            successBox.style.display = 'block';
        } else {
            alertBox.innerHTML = 'This email is already in use';
            alertBox.style.display = 'block';
        }
        return response.json();
    }).then((data) => {
        console.log(data);
    });

});


