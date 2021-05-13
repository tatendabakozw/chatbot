const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    service:{
        type: String,
        required: true
    },
    assistance_type: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Service', serviceSchema)