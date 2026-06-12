require('dotenv').config({ path: '../.env' });
const cookieParser = require('cookie-parser');
const express = require('express');

const authRoutes = require('./routes/auth.route');
const musicRoutes = require('./routes/music.route');
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/auth/api', authRoutes);
app.use('/music/api', musicRoutes);

module.exports = app;