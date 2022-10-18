const router = require("express").Router();

const uploads = require('../middleware/upload');
const courseControllers = require('../controllers/coursesController');

router.get("/getallCourse", courseControllers.GetAllCourse);
router.post("/addcourse",uploads.single('avatar'),courseControllers.AddCourse);


module.exports = router;