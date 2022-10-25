const router = require("express").Router();

const uploads = require('../middleware/upload');
const courseControllers = require('../controllers/coursesController');
const middlewareController = require("../controllers/middlewareController");


router.get("/getallCourse", courseControllers.GetAllCourse);
router.post("/addcourse",middlewareController.verifyTokenAndAdminAuth, uploads.single('avatar'),courseControllers.AddCourse);


module.exports = router;