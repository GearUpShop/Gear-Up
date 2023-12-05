const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/users', authController.getAllUsers);
router.delete('/user/:userId', authController.softDeleteUser);

module.exports = router;
