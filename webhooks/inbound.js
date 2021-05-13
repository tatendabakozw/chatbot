const express = require('express')
const router = express.Router()

router.post('/inbound', async(req, res) => {
    try {
        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error })
    }
})

module.exports = router