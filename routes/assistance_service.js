const e = require('express')
const express = require('express')
const { requireSignIn } = require('../middleware')
const router = express.Router()
const Assistance = require('../models/Assistance')

//post request
//create a assistance service
//http://localhost:3300/api/v1/assistance/create
router.post('/create',requireSignIn, async (req,res)=>{
    try {
        const {assistance} = req.body
        if(!assistance){
            res.status(422).json({error: 'Field must not be empty'})
        }else{
            const newAssistance = new Assistance({
                assistance_type: assistance
            })
            const savedAssistance = await newAssistance.save()
            res.status(200).json({message: 'Assistance saved', assistance: savedAssistance})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

//http://localhost:3300/api/v1/assistance/all
//get request
//get all assistance services that are first asked when user sends message
router.get('/all', async (req,res)=>{
    try {
        const assistance_types =  await Assistance.find({})
        let filledArray = new Array()
        if(assistance_types){
            res.status(200).json({assistances: assistance_types})

            for(let i = 0; i<assistance_types.length; i++){
                filledArray[i] = assistance_types[i].assistance_type
                // console.log(JSON.stringify(assistance_types[i].assistance_type))
            }

            res.status(200).send(filledArray)
        }else{
            res.status(500).json({error: 'no assistances at the moment'})
        }
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router