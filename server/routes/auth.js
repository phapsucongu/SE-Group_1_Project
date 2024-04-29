const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyToken = require('../middleware/auth');

// @route POST api/auth/register
// @desc Auth user
// @access Public

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, msg: 'missing username or password' });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, msg: 'username already exists' });
        }

        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password: hashedPassword
        });
        await newUser.save();
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, msg: 'user created', accessToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
})

// @route POST api/auth/login
// @desc Login user
// @access Public

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, msg: 'missing username or password' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, msg: 'incorrect username or password' });
        }

        const passwordValid = await argon2.verify(user.password, password);
        if (!passwordValid) {
            return res.status(400).json({ success: false, msg: 'incorrect username or password' });
        }

        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ success: true, msg: 'login success', accessToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
})


// @route GET api/auth/
// @desc Check if user is logged in
// @access Public


router.get('/',verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(400).json({ success: false, msg: 'user not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, msg: 'server error' });
    }
})
module.exports = router;