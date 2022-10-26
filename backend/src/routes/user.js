const express = require("express");
const route = express.Router();


const middlewareController = require("../controllers/middlewareController");
const usersControllers = require('../controllers/usersController');



route.get('/count',middlewareController.verifyTokenAndAdminAuth, usersControllers.countUser);

route.delete('/:id', middlewareController.verifyTokenAndAdminAuth,usersControllers.deleteUser);

route.get('/getalluser', middlewareController.verifyToken,usersControllers.getAllUser);




module.exports = route;