const express = require('express');
const userAuthController = require('./controllers/userAuthController');
const userController = require('./controllers/userController');

const router = express.Router();
router.post('/login', userAuthController.login);
router.get('/', userController.list);
module.exports = router;