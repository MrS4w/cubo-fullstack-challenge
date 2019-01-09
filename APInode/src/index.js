const port = 3000
const host = 'localhost'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port)
console.log(`Listening on "${host}:${port}"`)