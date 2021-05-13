const express = require('express')
const Assistance = require('../models/Assistance')
const sendWhatsappMessage = require('../send-message')
const router = express.Router()

router.post('/inbound', async (req, res) => {
    try {
        // const { number } = req.body.from
        // const { content } = req.body.message

        // const assistance_types = await Assistance.find({})
        // let filledArray = new Array()


        // if (content.text === "hi") {
        //     let paragraph = ''
        //     if (assistance_types) {
        //         res.status(200).json({ assistances: assistance_types })

        //         for (let i = 0; i < assistance_types.length; i++) {
        //             filledArray[i] = assistance_types[i].assistance_type
        //             paragraph += assistance_types[i].assistance_type + '\n'
        //         }
        //         sendWhatsappMessage(number, paragraph)
        //     } else {
        //         sendWhatsappMessage(number, 'no asssiii at the moment')
        //     }

        // } else {
        //     sendWhatsappMessage(number, "how may i help you")
        // }

        // console.log(content)
        res.status(200).end()

    } catch (error) {
        console.log(error)
    }
})

module.exports = router