const express = require('express');
const authController = require('../controllers/auth.controller');
const { createToken } = require('../middlewares/auth.middleware');
const { verifyUserLogin } = require('../middlewares/userverify.middelware');

const route = express.Router();

route.post('/register', authController.userRegister, createToken);
route.post('/login', authController.loginUser, createToken);
route.get('/check', verifyUserLogin, authController.checkAuth);
route.post('/logout', authController.logoutUser);

module.exports = route;