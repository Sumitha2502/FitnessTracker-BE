const express = require('express');
const Sleep = require('../models/sleepPatterns')
const sleepPatternRoute = express.Router();

sleepPatternRoute.get('/getallsleep', async (req, res) => {
    const entries = await Sleep.find();
    res.json(entries);
});

sleepPatternRoute.post('/api/sleep', async (req, res) => {
    const newEntry = new Sleep(req.body);
    await newEntry.save();
    res.json(newEntry);
});

module.exports = sleepPatternRoute;
