const express = require('express');
const authController = require('../controllers/auth.controller');
const { createToken } = require('../middlewares/auth.middleware');

const route = express.Router();

route.post('/register', authController.userRegister, createToken);
route.post('/login', authController.loginUser, createToken);

module.exports = route;