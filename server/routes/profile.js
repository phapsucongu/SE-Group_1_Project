const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const User = require('../models/User');
const Expert = require('../models/Expert');
const verifyToken = require('../middleware/auth');

// @route GET api/profile/user/:id
// @desc Get user profile
// @access Private

router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password -username ');
        if (!user) {
            return res.status(400).json({ success: false, msg: 'user not found' });
        }
        res.json({ success: true, user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/profile/user/:id
// @desc Update user profile
// @access Private

router.put('/user', verifyToken, async (req, res) => {
    
    try {
        let user = await User.findById(req.userId);
        if (!user) {
            const { birthday,role, fullname,email,gender, phone, speciality, bio, price } = req.body;
            let expertFields = {
                birthday : birthday,
                role : role,
                fullname : fullname,
                email : email,
                gender: gender,
                phone : phone,
                speciality : speciality,
                bio : bio,
                price : price
            }
            const user = await Expert.findById(req.userId);
            if (!user) {
                return res.status(400).json({ success: false, msg: 'user not found' });
            }
            const user2 = await Expert.findByIdAndUpdate
            (req.userId, { $set: expertFields }, { new: true });
            res.json({ success: true, user2 });
        }
        else{
            const { birthday, role, fullname, email, gender, phone } = req.body;
    let userFields = {
        birthday : birthday,
        role : role,
        fullname : fullname,
        email : email,
        gender : gender,
        phone : phone
    }

            const user2 = await User.findByIdAndUpdate(req.userId, { $set: userFields }, { new: true });
        res.json({ success: true, user2 });
        console.log(user2);
    }

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});


// @route PUT api/profile/userChangePassword/:id
// @desc Change password
// @access Private

router.put('/changePassword', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    const { CurrentPassword } = req.body;
    const { password } = req.body;
    if (!user) {
        const user = await Expert.findById(req.userId);
        if (!user) {
            return res.status(400).json({ success: false, msg: 'user not found' });
        }
        const passwordValid = await argon2.verify(user.password, CurrentPassword);
        if (!passwordValid) {
            return res.status(400).json({ success: false, msg: 'incorrect password' });
        }
        try {
            let hashedPassword = await argon2.hash(password);
            await Expert.findByIdAndUpdate(req.userId, { password: hashedPassword });
            res.json({ success: true, msg: 'Password updated' });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ success: false, msg: 'server error' });
        }
    }
    else{
        const passwordValid = await argon2.verify(user.password, CurrentPassword);
    if (!passwordValid) {
        return res.status(400).json({ success: false, msg: 'incorrect password' });
    }
    try {
        let hashedPassword = await argon2.hash(password);
        await User.findByIdAndUpdate(req.userId, { password: hashedPassword });
        res.json({ success: true, msg: 'Password updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
}
});

// @route GET apt/profile/expert/:id
// @desc Get expert profile
// @access Private

router.get('/expert/:id', async (req, res) => {
    try {
        const user = await Expert.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(400).json({ success: false, msg: 'user not found' });
        }
        res.json({ success: true, user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});


// @route PUT api/profile/expert/:id
// @desc Update expert profile
// @access Private

router.put('/expert/:id', verifyToken, async (req, res) => {
    const { birthday, role, fullname, gmail, address, phone, experience, education, speciality } = req.body;
    let expertFields = {
        birthday : birthday,
        role : role,
        fullname : fullname,
        gmail : gmail,
        address : address,
        phone : phone,
        experience : experience,
        education : education,
        speciality : speciality
    }
    try {
        let expert = await Expert.findById(req.params.id);
        if (!expert) {
            return res.status(400).json({ success: false, msg: 'user not found' });
        }
        expert = await Expert.findByIdAndUpdate(req.params.id, { $set: expertFields }, { new: true });
        res.json({ success: true, expert });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/profile/expertChangePassword/:id
// @desc Change password
// @access Private

router.put('/expertChangePassword/:id', verifyToken, async (req, res) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({ success: false, msg: 'Password must be at least 6 characters' });
    }
    try {
        let hashedPassword = await argon2.hash(password);
        await Expert.findByIdAndUpdate(req.params.id, { password: hashedPassword });
        res.json({ success: true, msg: 'Password updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/profile
module.exports = router;