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

fetchTasks()