const express = require('express')

const Data = require('../models/Data')

const router = express.Router()

router.post('/data', async (req, res) => {
    try {
        const data = await Data.create(req.body)

        return res.send({ data })
    } catch (err) {
        return res.status(400).send({ error: 'Insertion failed!' })
    }
})

module.exports = app => app.use('/data', router)