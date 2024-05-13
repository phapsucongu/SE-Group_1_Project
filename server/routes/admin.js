const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const User = require('../models/User');
const Expert = require('../models/Expert');
const verifyToken = require('../middleware/auth');

// @route POST api/admin/addExpert
// @desc Add expert
// @access Private

router.post('/addExpert', verifyToken, async (req, res) => {
    const { username, password, bithday, role, fullname, email, phone, gender, experience, education, address, speciality } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, msg: 'username and password are required' });
    }
    try {
        const user = await Expert.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, msg: 'username already taken' });
        }
        const hashedPassword = await argon2.hash(password);
        const newUser = new Expert({
            username,
            password: hashedPassword,
            bithday,
            role,
            fullname,
            email,
            phone
        });
        await newUser.save();
        res.json({ success: true, msg: 'Expert created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

module.exports = router;