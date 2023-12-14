const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('./env');

exports.initializeDatabase = () => mongoose.connect(CONNECTION_STRING);