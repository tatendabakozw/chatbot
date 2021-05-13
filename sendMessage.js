require('dotenv').config()
const axios = require("axios")

const sendWhatsappMessage = async (number, message) => {
    try {
        await axios.post(
            process.env.BASE_URL_DEMO,
            {
                from: {
                    type: "whatsapp",
                    number: process.env.WHATSAPP_NUMBER,
                },
                to: {
                    type: "whatsapp",
                    number: number,
                },
                message: {
                    content: {
                        type: 'text',
                        text: message,
                    },
                },
            },
            {
                auth: {
                    username: process.env.VONAGE_API_KEY,
                    password: process.env.VONAGE_API_SECRET,
                },
            }
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendWhatsappMessage