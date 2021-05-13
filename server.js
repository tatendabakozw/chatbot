const express = require('express')
const app =  express()
const morgan = require('morgan')
const helmet = require('helmet')
require('dotenv').config()

const port = process.env.PORT || 5500

//app level middleware
app.use(morgan('common'))
app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({extended: true}))

//connecting database
const connectDB = require('./db')
connectDB()

//user designed routes
const userRoute = require('./routes/user')
const assistanceRoute = require('./routes/assistance_service')
app.use('/api/v1/user', userRoute)
app.use('/api/v1/assistance/',assistanceRoute)

//webhooks
const handleInbound = require('./webhooks/inbound')
const handleStatus = require('./webhooks/status')
app.use('/webhooks', handleInbound)
app.use('/webhooks', handleStatus)

app.get('/',(req,res)=>{
    res.send('tatenda bako')
})

//literal listener
app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`server up on port ${port}`)
    }
})