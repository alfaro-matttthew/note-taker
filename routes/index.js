const express = require('express');

// Import our modular routers for /tips and /feedback
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');
// TODO: import your diagnostics route

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// TODO: Initialize diagnostics route

module.exports = app;