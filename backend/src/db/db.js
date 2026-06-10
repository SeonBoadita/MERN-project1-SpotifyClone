const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
    } catch (error) {
        console.error("ERROR || DB FILE || ", error);
        process.exit(1);
    }
}

module.exports = connectDB;