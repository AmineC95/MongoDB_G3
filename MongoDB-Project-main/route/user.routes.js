const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user.controller');

router.get('/', userCtrl.getAll)
router.get('/:id', userCtrl.getOne)
router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.update)
router.delete('/:id', userCtrl.delete)

module.exports = router;