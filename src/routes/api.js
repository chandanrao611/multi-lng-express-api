const express = require('express');
const userRoutes = require('../user/index');
var router = express.Router();
router.use('/user', userRoutes);
router.get('/', (req, res) => res.json('Welcome to APIs.'));

module.exports = router;