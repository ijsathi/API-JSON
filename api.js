function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayPlyer(data))
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data))
}

function displayPlyer(data){
    const ul = document.getElementById('users')
    for(const user of data){
        console.log(user);
        const li = document.createElement('li')
        li.innerText = `name: ${user.name} , email: ${user.email}`
        ul.appendChild(li)
    }
}
