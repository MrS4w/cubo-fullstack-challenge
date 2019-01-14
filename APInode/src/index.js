const port = 8080

const express = require('express')
const app = express()

app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")

    res.send([{
        "id": 1,
        "firstName": "Carlos",
        "lastName": "Moura",
        "participation": 5
    }, {
        "id": 2,
        "firstName": "Fernanda",
        "lastName": "Oliveira",
        "participation": 15
    }, {
        "id": 3,
        "firstName": "Hugo",
        "lastName": "Silva",
        "participation": 20
    }, {
        "id": 4,
        "firstName": "Eliza",
        "lastName": "Souza",
        "participation": 20
    }, {
        "id": 5,
        "firstName": "Anderson",
        "lastName": "Santos",
        "participation": 40
    }])
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})