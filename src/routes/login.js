const express = require('express');
const authLogin = require('../controller/authController');
const { validateFill } = require('../middleware/index');

const loginRouter = express.Router();

loginRouter.post('/', validateFill, authLogin.postLogin);

module.exports = loginRouter;