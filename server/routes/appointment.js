const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const verifyToken = require('../middleware/auth');


// @route POST api/appointment/create
// @desc Create appointment
// @access Public

router.post('/create', verifyToken, async (req, res) => {
    try {
        const { expertId, date, time, description } = req.body;
        if (!expertId || !date || !time || !description) {
            return res.status(400).json({ success: false, msg: 'missing fields' });
        }
        const user = await Appointment.create({
            expertId,
            userId: req.userId,
            date,
            time,
            description
        });
        res.status(200).json({ success: true, msg: 'appointment created', data: user });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});

// @route GET api/appointment/myAppointments
// @desc Get all appointments
// @access Public

router.get('/myAppointments', verifyToken, async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.userId }).populate('expertId');
        res.status(200).json({ success: true, data: appointments });
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
        if (appointment.userId !== req.userId) {
            return res.status(403).json({ success: false, msg: 'not allowed' });
        }
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, msg: 'appointment deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, msg: 'server error' });
    }
});