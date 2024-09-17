const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const sleepSchema = new mongoose.Schema({
    date: String,
    duration: Number,
    quality: String,
});

const Sleep = mongoose.model('Sleep', sleepSchema);

module.exports = mongoose.model('Sleep', sleepSchema, 'sleep');
