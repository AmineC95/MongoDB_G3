const express = require('express');
const router = express.Router();

const orderCtrl = require('../controller/order.controller');

router.get('/:id', orderCtrl.getByUserId)
router.post('/', orderCtrl.create)

module.exports = router;