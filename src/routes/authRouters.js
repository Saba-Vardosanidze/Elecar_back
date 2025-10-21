const express = require('express');
const { singUp, login, logout } = require('../controllers/authController');

const auth = express.Router();

auth.post('/singup', singUp);
auth.post('/login', login);
auth.post('/logout', logout);

module.exports = auth;
