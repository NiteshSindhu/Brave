const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config()
const connection=mongoose.connect(process.env.URL);

module.exports = connection;