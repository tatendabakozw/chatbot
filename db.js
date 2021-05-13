const mongoose = require('mongoose')

const connectDB = () =>{
    mongoose.connect(`mongodb://localhost:27017/chatBotDB`,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true
    })
    mongoose.connection.once('open',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('DAtabase connected sucessfully')
        }
    })
}

module.exports = connectDB