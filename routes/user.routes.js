// routes/userRoute.js
const express = require("express");
const { User } = require('../model/user.model')
const router = express.Router();
// const nodemailer = require('nodemailer');

// Route for /user

router.get("/", async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
});
// route save new user 
router.post('/register', async (req, res) => {
    try {
        if (!req.body.fullName || !req.body.phoneNum || !req.body.email || !req.body.password) {
            return res.status(400).send({
                message: 'send all required fields: fullName, phoneNum, email, password'
            })
        }
        const newUser = {
            fullName: req.body.fullName,
            phoneNum: req.body.phoneNum,
            email: req.body.email,
            password: req.body.password
        }
        const user = await User.create(newUser)
        return res.status(200).send(user)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})


//check user login
router.post('/login', async (req, res) => {
    try {
        const userLogin = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await User.findOne(userLogin);
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })

    }
})

//get user login
router.get('/profile', async (req, res) => {
    try {
        const user = await User.find({})
        res.status(200).send(user)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})
// change password
router.post('/profile/password', async (req, res) => {
    const id = req.body.id
    const newPassword = req.body.password
    try {
        const user = await User.updateOne(
            { _id: id },
            { $set: { password: newPassword } }
        )
        res.status(200).send(user)
        console.log(res)
    } catch (e) {
        console.log(e.message);
        res.status(500).send({ message: e.message })
    }
})
module.exports = router;