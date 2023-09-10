const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req,res) => {
    res.send('hello')
})

app.get('/task-api', (req, res) => {
    res.json({ 
        "data" :
        [
            {"name" : "wash car"},
            {"name" : "read book"}
        ]
    })
})

app.post('/task-api', (req,res) => {
    let task = req.body.task
    console.log(`${task}`);
    task = `new task is ${task}`
    res.json({"name" : task})
})

app.listen(port , () => {
    console.log(`server is up, listening on port ${port}`)
})
