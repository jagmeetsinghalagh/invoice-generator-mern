const express = require('express');
const authControllers = require('../Controllers/authControllers');

const router = express.Router();

router.post('/signup', authControllers.signupUser );

router.post('/login', authControllers.loginUser );

module.exports = router;