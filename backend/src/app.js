require('dotenv').config({ path: '../.env' });
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.route');
const musicRoutes = require('./routes/music.route');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Must be the exact frontend URL (no trailing slash)
    credentials: true // Required for cookies to be sent back and forth
}));
app.use(cookieParser());
app.use(express.json());

app.use('/auth/api', authRoutes);
app.use('/music/api', musicRoutes);

module.exports = app;