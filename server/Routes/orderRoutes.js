const express = require('express');
const router = express.Router();
const order = require('../controller/OrderController')
const authorization = require('../middleware/authorize');

router.post('/order', authorization.authorize,order.createOrder);

module.exports = router;
