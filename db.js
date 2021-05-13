const mongoose = require('mongoose')
const mongoUrl = process.env.mongoUrl

const connectDB = (err) =>{
    mongoose.connect(mongoUrl, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    })
    mongoose.connection.once('open', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`database connected successfully`)
        }
    })
}

module.exports = connectDB