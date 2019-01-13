const port = 8080

const express = require('express')
const app = express()

app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")

    res.send([{
        "id": 1,
        "firstName": "Victor",
        "lastName": "Silva",
        "participation": 7
    }])
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})