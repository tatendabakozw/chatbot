const mongoose= require('mongoose')

const assistanceSchema = new mongoose.Schema({
    assistance_type:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Assistance', assistanceSchema)