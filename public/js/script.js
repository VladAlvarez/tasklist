const apiurl = '/task-api'

async function fetchTasks(){
    const response = await fetch(apiurl)
    const data = await response.json()
    console.log(response);
    console.log(data)
    const list = document.getElementById('task-list')
    list.innerHTML = `<li>${data.data[0].name}</li>`
    data.data.forEach(task => {
        list.innerHTML += `<li>${task.name}</li>`
    });
}
async function addTask(event){
    event.preventDefault();
    const aTask = document.getElementById('newTask').value

    const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({
            task:aTask
        })
    })
    const data = await response.json()
    console.log(response);
    console.log(data)
    const list = document.getElementById('task-list')
    const newItem = document.createElement('li')
    newItem.textContent = data.name
    list.appendChild(newItem)
}

fetchTasks()
document.getElementById('taskForm').addEventListener('submit', addTask)