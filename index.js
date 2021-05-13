var express = require('express');
var app = express();
require('dotenv').config();
const morgan= require('morgan')
const helmet = require('helmet')

//app level middleware
var port = process.env.PORT || 5500;
app.use(helmet())
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//connecting database
var connectDB = require('./db.js');
connectDB();

//webhooks
const inboundHook = require('./webhooks/inbound')
const statusHook = require('./webhooks/status')
app.use('/webhooks',inboundHook)
app.use('/webhooks', statusHook)

app.get('/',(req,res)=>{
    res.json({message: '/rentout chatbot server welcomwes you'})
})

//the listener
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server up on port " + port);
    }
});
