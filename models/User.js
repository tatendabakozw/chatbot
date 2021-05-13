const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'super_admin'],
        default: 'admin'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)