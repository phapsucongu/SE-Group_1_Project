const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/auth');
const Expert = require('../models/Expert');


// @route POST api/appointment/create
// @desc Create appointment
// @access Public

router.post('/create', verifyToken, async (req, res) => {
    try {
        const { lawyer, date, time, description } = req.body;

        // Kiểm tra sự tồn tại của luật sư
        const lawyerExists = await Expert.findById(lawyer);
        if (!lawyerExists) {
            return res.status(404).json({ success: false, msg: 'Lawyer not found' });
        }

        // Kiểm tra sự tồn tại của người dùng
        const userExists = await User.findById(req.userId);
        if (!userExists) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }

        // Tạo cuộc hẹn mới
        const appointment = await Appointment.create({
            lawyer,
            user: req.userId,
            date,
            time,
            description,
            lawyerName: lawyerExists.fullname,
            userName: userExists.fullname
        });

        res.status(200).json({ success: true, msg: 'Appointment created', data: appointment });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
});


// @route GET api/appointment/
// @desc Get all appointments
// @access Public

router.get('/', verifyToken, async (req, res) => {
    try {
        //console.log(req.userId);
        const user = await User.findById(req.userId);
        if (!user) {
            try {
                const appointment = await Appointment.find({ lawyer: req.userId });
                res.status(200).json({ success: true, data: appointment });
            } catch (error) {
                console.error(error.message);
                res.status(500).json({ success: false, msg: 'server error' });
            }
        }
        else{
            const appointments = await Appointment.find({ user: req.userId });
        await Promise.all(appointments.map(async (appointment) => {
            const lawyer = await Expert.findById(appointment
                .lawyer)
                .select('fullname');
            console.log(lawyer);
            appointment.lawyerName = lawyer.fullname;
        }));
        res.status(200).json({ success: true, data: appointments });
    }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});


// @route PUT api/appointment/update/:id
// @desc Update appointment
// @access Public

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        const { date, time, description } = req.body;
        if (!date || !time || !description) {
            return res.status(400).json({ success: false, msg: 'missing fields' });
        }
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        if (appointment.userId !== req.userId) {
            return res.status(403).json({ success: false, msg: 'not allowed' });
        }
        appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({ success: true, msg: 'appointment updated', data: appointment });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route DELETE api/appointment/delete/:id
// @desc Delete appointment
// @access Public

router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        // if (appointment.user !== req.userId) {
        //     console.log(appointment.user, req.userId);
        //     return res.status(403).json({ success: false, msg: 'not allowed' });
        // }
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, msg: 'appointment deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});


// @route PUT api/appointment/accept/:id
// @desc Accept appointment
// @access Public

router.put('/accept/:id', verifyToken, async (req, res) => {
    try {
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        const expert = await Expert.findById(appointment.lawyer);
        // if (expert.user !== req.userId) {
        //     return res.status(403).json({ success: false, msg: 'not allowed' });
        // }
        appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: 'ACCEPTED' }, {
            new: true,
            runValidators: true
        });
        res.status(200).json({ success: true, msg: 'appointment accepted', data: appointment });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route PUT api/appointment/reject/:id
// @desc Reject appointment
// @access Public

router.put('/reject/:id', verifyToken, async (req, res) => {
    try {
        let appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return res.status(404).json({ success: false, msg: 'appointment not found' });
        }
        const expert = await Expert.findById(appointment.lawyer);
        // if (expert.user !== req.userId) {
        //     return res.status(403).json({ success: false, msg: 'not allowed' });
        // }
        appointment = await Appointment.findByIdAndUpdate(req.params.id, { status: 'REJECTED' }, {
            new: true,
            runValidators: true
        });
        res.status(200).json({ success: true, msg: 'appointment rejected', data: appointment });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});



module.exports = router;