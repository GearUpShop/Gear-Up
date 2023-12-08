const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logins', authController.login);
router.get('/users', authController.getAllUsers);
router.put('/user/:userId', authController.softDeleteUser);

module.exports = router;
