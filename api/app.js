function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => displayData(data))
}

function displayData(data){
    const ul = document.getElementById('displayUser')
    for( const user of data){
        const li = document.createElement('li');
        li.innerText = `Name:${user.name} email: ${user.email}`;
        ul.appendChild(li);
    
    }
    

}