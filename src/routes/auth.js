const express = require('express');
const authController = require('../controllers/auth');

const router = express.router();
router.post('/register', authController.register);
router.post('/login', authController.login);
module.exports = router;