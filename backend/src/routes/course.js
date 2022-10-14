const router = require("express").Router();

const courseControllers = require('../controllers/coursesController');

router.get("/getallCourse", courseControllers.GetAllCourse);
router.post("/addcourse", courseControllers.AddCourse);


module.exports = router;