function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
// loadPosts()
function displayPost(posts){
    const divContainer = document.getElementById('posts')
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        divContainer.appendChild(div)
    }
}

function addPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title:'My new posts',
            body:'this is my posts',
            userId: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}


