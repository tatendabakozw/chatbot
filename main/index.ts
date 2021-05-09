const express = require('express')
const app = express()

app.listen(3000, (err: any)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`Server up on port 3000`)
    }
})