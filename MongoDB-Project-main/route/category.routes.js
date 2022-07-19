const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controller/category.controller')

router.get('/', categoryCtrl.getAll)
router.get('/:id', categoryCtrl.get)
router.post('/', categoryCtrl.create)
router.delete('/:id', categoryCtrl.delete)


module.exports = router;