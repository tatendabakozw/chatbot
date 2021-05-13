const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator');

//register user
//post request
//http://localhost:3300/api/v1/user/register
router.post('/register', [check('email').isEmail()], async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(200).json({ error: 'Invalid email address format' })
        } else {
            const { email, password } = req.body
            if (!email, !password) {
                res.status(422).json({ error: 'Enter all fields' })
            } else {
                const user = await User.findOne({ email: email })
                if (user) {
                    res.status(500).json({ error: 'User already exists' })
                } else {
                    const hash = await bcrypt.hashSync(password, 10)
                    const newUser = new User({
                        email: email,
                        password: hash,
                        role: 'admin'
                    })
                    const saved_user = await newUser.save()
                    res.status(200).json({ message: 'User created', user: saved_user })
                }
            }

        }

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//login user
//post request
//http://localhost:3300/api/v1/user/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email, !password) {
            res.status(422).json({ error: 'Enter all fields' })
        } else {
            const user = await User.findOne({ email: email })
            if (user) {
                bcrypt.compare(password, user.password, async function (err, result) {
                    if (err) {
                        return res.status(500).json({ error: "Invalid Credentials" })
                    } else if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            user_id: user._id,
                        }, process.env.JWT_SECRET)
                        res.status(200).json({
                            message: 'Login Successful',
                            token: token,
                            user: {
                                email: user.email,
                                user_id: user._id,
                                email: user.email,
                                role: user.role,
                            }
                        })
                    }
                    else {
                        res.status(200).json({ error: "Invalid Credentials" })
                    }
                });
            } else {
                res.status(500).json({ error: 'Email not registered' })
            }
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router