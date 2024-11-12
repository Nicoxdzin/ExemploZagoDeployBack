const express = require('express');
const person = require('../routes/person');
const vehicle = require('../routes/vehicle');
const auth = require('../routes/auth');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/person', person);
    app.use('/api/vehicle', vehicle);
    app.use('/api/auth', auth)
}