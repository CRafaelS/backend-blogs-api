const express = require('express');
const authLogin = require('../controller/authController');
const { validateEmail, validatePassWord } = require('../middleware/index');

const loginRouter = express.Router();

loginRouter.post('/', validateEmail, validatePassWord, authLogin.postLogin);

module.exports = loginRouter;