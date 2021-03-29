const userList = document.getElementById('userList');
const searchForm = document.getElementById('searchBtn');
console.log("START CHECK")
console.log(searchForm);

const form = document.getElementById('userList');
    const text = document.getElementById("searchBtn");
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log(text.value);

searchForm.addEventListener("submit", submitFunction);


        });
