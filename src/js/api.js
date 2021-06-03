function fetchData(data){
    let name = document.getElementById('user-name')
    let email = document.getElementById('user-email')
    let id = document.getElementById('user-id')
    name.innerHTML = data[1]["username"]
    email.innerHTML = data[1]["email"]
    id.innerHTML = data[1]["id"]
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        fetchData(data)    
    });