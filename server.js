const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

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

app.listen(port , () => {
    console.log(`server is up, listening on port ${port}`)
})
