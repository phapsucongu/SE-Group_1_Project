const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const User = require('../models/User');
const Expert = require('../models/Expert');
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/auth');

// @route POST api/admin/addExpert
// @desc Add expert
// @access Private

router.post('/addExpert', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    const { username, password, birthday, role, fullname, email, phone, gender, speciality,price } = req.body;
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
            birthday,
            role,
            fullname,
            email,
            phone,
            gender,
            speciality,
            price,
        });
        await newUser.save();
        res.json({ success: true, msg: 'Expert created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});


// @route GET api/admin/addUser
// @desc Add user
// @access Private

router.post('/addUser', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    const { username, password, birthday, role, fullname, email } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, msg: 'username and password are required' });
    }
    try {
        const user = await User.findOne({username});
        if (user) {
            return res.status(400).json({ success: false, msg: 'username already taken' });
        }
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
            username,
            password: hashedPassword,
            birthday,
            role,
            fullname,
            email
        });
        await newUser.save();
        res.json({ success: true, msg: 'User created' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/admin/updateUser
// @desc Update user
// @access Private

router.put('/updateUser/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    const { username, password, birthday, role, fullname, email } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, msg: 'username and password are required' });
    }
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        const hashedPassword = await argon2.hash(password);
        user = await User.findByIdAndUpdate(req.params.id, {
            username,
            password: hashedPassword,
            birthday,
            role,
            fullname,
            email
        });
        res.json({ success: true, msg: 'User updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/admin/updateExpert
// @desc Update expert
// @access Private

router.put('/updateExpert/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    const { username, password, birthday, role, fullname, email,phone} = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, msg: 'username and password are required' });
    }
    try {
        let user = await Expert.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'Expert not found' });
        }
        const hashedPassword = await argon2.hash(password);
        user = await Expert.findByIdAndUpdate(req.params.id, {
            username,
            password: hashedPassword,
            birthday,
            role,
            fullname,
            email,
            phone
        });
        res.json({ success: true, msg: 'Expert updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route DELETE api/admin/deleteUser
// @desc Delete user
// @access Private

router.delete('/deleteUser/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        await User.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route DELETE api/admin/deleteExpert
// @desc Delete expert
// @access Private

router.delete('/deleteExpert/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        let user = await Expert.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'Expert not found' });
        }
        await Expert.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Expert deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/admin/getAllUsers
// @desc Get all users
// @access Private

router.get('/getAllUsers', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        const users = await User.find();
        res.json({ success: true, users });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/admin/getAllExperts
// @desc Get all experts
// @access Private

router.get('/getAllExperts', verifyToken, async (req, res) => {
    const user
        = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        const experts = await Expert.find();
        res.json({ success: true, experts });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/admin/getUser/:id
// @desc Get user by id
// @access Private

router.get('/getUser/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.json({ success: true, user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/admin/getExpert/:id
// @desc Get expert by id
// @access Private

router.get('/getExpert/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        const expert = await Expert.findById(req.params.id);
        if (!expert) {
            return res.status(404).json({ success: false, msg: 'Expert not found' });
        }
        res.json({ success: true, expert });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/admin/updateAppointment
// @desc Update appointment
// @access Private

router.put('/updateAppointment/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    const { date, time, description } = req.body;
    if (!date || !time || !description) {
        return res.status(400).json({ success: false, msg: 'missing fields' });
    }
    try {
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        appointment = await Appointment.findByIdAndUpdate(req.params.id, {
            date,
            time,
            description
        });
        res.json({ success: true, msg: 'Appointment updated' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route DELETE api/admin/deleteAppointment
// @desc Delete appointment
// @access Private

router.delete('/deleteAppointment/:id', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user) {
        return res.status(403).json({ success: false, msg: 'Unauthorized' });
    }
    if (user.role !== 'admin') {
        return res.status(403).json({ success: false, msg: 'not allowed' });
    }
    try {
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: 'Appointment deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});
module.exports = router;