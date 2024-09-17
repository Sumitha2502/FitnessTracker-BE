const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const nutritionSchema = new mongoose.Schema({
    date: String,
    calories: Number,
    carbs: Number,
    protein: Number,
    fat: Number,
    water: Number,
});

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = mongoose.model('Nutrition', nutritionSchema, 'nutrition');