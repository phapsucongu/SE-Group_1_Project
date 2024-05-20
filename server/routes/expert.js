const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/auth');
const Expert = require('../models/Expert');

// @route GET api/expert/getall
// @desc Get all experts
// @access Public

router.get('/getall', async (req, res) => {
    try {
        const experts = await Expert.find();
        res.status(200).json({ success: true, data: experts });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/expert/get/:id
// @desc Get expert by id
// @access Public

router.get('/get/:id', async (req, res) => {
    try {
        const expert = await Expert.findById(req.params.id);
        res.status(200).json({ success: true, data: expert });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/expert/search
// @desc Search expert
// @access Public

router.post('/search', async (req, res) => {
    try {
        const { fullname, gender, speciality, minPrice, maxPrice } = req.body;
        let searchCriteria = {};
        if (fullname) {
            searchCriteria.fullname = { $regex: fullname, $options: 'i' }; // 'i' for case-insensitive
        }
        if (gender) {
            searchCriteria.gender = gender;
        }
        if (speciality) {
            searchCriteria.speciality = speciality;
        }
        if (minPrice && maxPrice) {
            searchCriteria.price = { $gte: parseFloat(minPrice), $lte: parseFloat(maxPrice) };
        } else if (minPrice) {
            searchCriteria.price = { $gte: parseFloat(minPrice) };
        } else if (maxPrice) {
            searchCriteria.price = { $lte: parseFloat(maxPrice) };
        }
        const experts = await Expert.find(searchCriteria);
        res.status(200).json({ success: true, data: experts });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/expert/getUser/:id
// @desc Get user by id
// @access Public

router.get('/getUser/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});
module.exports = router;