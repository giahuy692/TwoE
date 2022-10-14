const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authsController.js');
const middlewareController = require('../controllers/middlewareController');


//Register
router.post('/register', authControllers.register);
router.post('/login', authControllers.login);
router.post('/refresh', authControllers.requestRefreshToken);
router.post('/logout', middlewareController.verifyToken,authControllers.logout);


module.exports = router;
