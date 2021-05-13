const express = require('express')
const router = express.Router()

router.post('/status', (req, res) => {
    try {
        console.log(req.body)
        res.status(200).end()
    } catch (error) {
        console.log(error)
    }
})

module.exports = router