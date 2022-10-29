const express = require('express');
const router = express.Router();
const inforControllers = require('../controllers/inforController');
const middlewareController = require('../controllers/middlewareController');


//Register
router.post('/addinfor/:id',inforControllers.addInfo);


module.exports = router;
