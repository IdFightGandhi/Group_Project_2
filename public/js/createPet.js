var petNameInput = document.querySelector('#newPetName');
var petTypeInput = document.querySelector('#newPetType');
var petAgeInput = document.querySelector('#newPetAge');
var personality = document.querySelector('#newPetPersonalty');
var petModalAlert = document.querySelector('.petCreationAlert');
var newPetCreatButton = document.querySelector('#createNewPet');


newPetCreatButton.addEventListener('click', async (event) => {
    event.preventDefault();
    if( petNameInput.value == ''){
        petModalAlert.style.display = 'block';
        return;
    }
    if( petTypeInput.value == ''){ 
        petModalAlert.style.display = 'block';
        return;
    }
    if( petAgeInput.value == ''){
        petModalAlert.style.display = 'block';
        return; 
    }
    if( personality.value == ''){
        petModalAlert.style.display = 'block';
        return;
    }

    let newPetInfo = {
        name: petNameInput.value,
        age: petAgeInput.value,
        type: petTypeInput.value ,
        personality: personality.value,
        neutered: 'NA',
        pict: 'https://res.cloudinary.com/dj63qafw1/image/upload/v1617137602/logo_ifkbzn.png',
    }

    await fetch('/api/pet/create', {
        method: 'POST',
        body: JSON.stringify(newPetInfo),
        headers: { 'Content-Type': 'application/json' },
    });

    location.reload(); 
    
});


var removeButtons = document.querySelectorAll('.removePet');
removeButtons.forEach(element => {
    element.addEventListener('click', async (event) => {
        event.preventDefault();
        let petId = event.target.getAttribute('myPetId');
        let petObjToSend = {
            id: petId,
        };

        await fetch('/api/pet/delete', {
            method: 'DELETE',
            body: JSON.stringify(petObjToSend),
            headers: { 'Content-Type': 'application/json' },
        });

        location.reload();

    })
});


var uploadPetPicsButtons = document.querySelectorAll('.uploadPetPict');
uploadPetPicsButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        let petId = event.target.getAttribute('myPetId');

        cloudinary.openUploadWidget({
            cloudName: "dj63qafw1", uploadPreset: "h7f3zhfs",
            sources: [ 'local'],}, 
            async (error, result) => {
                if(result.event == 'success'){
                    let petPicObj = {
                        pict: result.info.secure_url,
                        id: petId,
                    }
    
                    await fetch('/api/pet/update', {
                        method: 'PUT',
                        body: JSON.stringify(petPicObj),
                        headers: { 'Content-Type': 'application/json' },
                    });
    
                    location.reload();
                }
    
    
            });
    });
});