const express = require('express');
const router = express.Router();
const contactUsController = require('../controller/contactUsController');

// Define route to submit contact form
router.post('/contact', contactUsController.submitContactForm);

module.exports = router;
