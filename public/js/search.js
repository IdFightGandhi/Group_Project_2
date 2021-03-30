

const userList = document.getElementById('userList');
const searchForm = document.getElementById('searchBtn');
const input = document.querySelector("#searchBar");
console.log("START CHECK")
console.log(searchForm);

const form = document.getElementById('userList');


searchForm.addEventListener("click", function(e){
    e.preventDefault();
    console.log('click')
    let userInput = input.value;
    console.log(userInput)

    const findUser = {
        name: userInput
        
    }
console.log(findUser)
    const response = fetch('/api/user/findall', {findUser})

    .then(data=>{
        console.log(data)
    })
console.log(response);


});