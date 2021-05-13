const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 5500

app.listen(port, (err: any)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server up on port ${port}`)
    }
})