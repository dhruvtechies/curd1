const express = require('express');
const router = express.Router();
const userController = require('../controller/Controller');

router.post('/user', userController.createuser);
router.get('/userget', userController.getalluser);
router.get('/user/:id', userController.findone);
router.get('/user/:id', userController.findpk);
router.put('/user/:id', userController.updateuser);
router.patch('/user/:id', userController.updateuser);

router.delete('/user/:id', userController.deleteuser);


module.exports = router;
