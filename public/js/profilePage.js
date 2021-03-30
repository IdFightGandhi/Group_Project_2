var userNameE = document.querySelector('#updatedUserName');
var userAgeE = document.querySelector('#updatedAge');
var userZipE = document.querySelector('#updatedZip');
var userBioE = document.querySelector('#updatedBio');
var uploadPic = document.querySelector('.uploadButton');

// var myCropWidget = cloudinary.createUploadWidget({
//     cloudName: 'dj63qafw1', uploadPreset: 'dj63qafw1',}, 
//     (error, result) => { console.log(error, result) })

uploadPic.addEventListener('click', (event) => {
    event.preventDefault;
    cloudinary.openUploadWidget({
        cloudName: "dj63qafw1", uploadPreset: "h7f3zhfs",
        sources: [ 'local'],}, 
        async (error, result) => {
            if(result.event == 'success'){
                let userPicObj = {
                    pict: result.info.secure_url,
                }

                await fetch('/api/user/editinfo', {
                    method: 'PUT',
                    body: JSON.stringify(userPicObj),
                    headers: { 'Content-Type': 'application/json' },
                });
                location.reload();
            }
        });
});


document.querySelector('#editProfButton').addEventListener('click', async (event) => {
    let editInfoObj = {};
    if(userNameE.value != ''){
        editInfoObj.name = userNameE.value;
    }
    if(userAgeE.value != ''){
        editInfoObj.age = userAgeE.value;
    }
    if(userZipE.value != ''){
        editInfoObj.zip = userZipE.value;
    }
    if(userBioE.value != ''){
        editInfoObj.bio = userBioE.value;
    }

    await fetch('/api/user/editinfo', {
        method: 'PUT',
        body: JSON.stringify(editInfoObj),
        headers: { 'Content-Type': 'application/json' },
    });

    location.reload(); 
});





document.querySelector('#logOutLink').addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch('/api/user/logout', {
        method: 'POST'
    });
    document.location.replace('/');
});