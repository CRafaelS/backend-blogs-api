const express = require('express');
const userController = require('../controller/userController');
const { validateEmail, validatePassWord } = require('../middleware/index');
const { validateDisplayName } = require('../middleware/validateDisplayName');

const userRouter = express.Router();

userRouter.post('/', 
  validateEmail, validatePassWord, validateDisplayName,
  userController.postUser);

module.exports = userRouter;