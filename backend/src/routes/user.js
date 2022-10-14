const express = require("express");
const middlewareController = require("../controllers/middlewareController");
const route = express.Router();


const usersControllers = require('../controllers/usersController');



route.get('/count',middlewareController.verifyTokenAndAdminAuth, usersControllers.countUser);

route.delete('/:id', middlewareController.verifyTokenAndAdminAuth,usersControllers.deleteUser);

route.get('/getalluser', middlewareController.verifyToken,usersControllers.getAllUser);




module.exports = route;