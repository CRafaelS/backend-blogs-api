const express = require('express');
const userController = require('../controller/userController');
const { validateEmail, validatePassWord } = require('../middleware/index');
const { validateDisplayName } = require('../middleware/validateDisplayName');
const { validateToken } = require('../middleware/validateToken');

const userRouter = express.Router();

userRouter.post('/', 
  validateEmail, validatePassWord, validateDisplayName,
  userController.postUser);

userRouter.get('/', validateToken, userController.getAllUser);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;