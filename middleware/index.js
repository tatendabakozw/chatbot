const jwt = require('jsonwebtoken')
// const Payment = require('../models/Payment')

//checking if user id signed in route
exports.requireSignIn = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                next(err)
            }
            if (user) {
                req.user = user
                next()
            }
        })

    } else {
        return res.status(500).json({ message: 'Authorisation Required!' })
    }
}

// exports.requirePayment = (req, res, next) => {
//     const user = req.user
//     if (user) {
//         Payment.findOne({ paymentuser: user.user_id }, (err, payment) => {
//             if (err) {
//                 next(err)
//             }
//             if (payment.payed === 'true') {
//                 req.payment = payment
//                 next()
//             }else{
//                 return res.status(500).json({ message: 'Please upgrade account' })
//             }
//         })
//     } else {
//         return res.status(500).json({ message: 'Authorisation Required!' })
//     }
// }