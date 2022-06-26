const express = require('express');
const categoryController = require('../controller/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryController.createCategory);

module.exports = categoryRouter;