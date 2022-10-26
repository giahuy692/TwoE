const router = require("express").Router();

const uploads = require('../middleware/upload');
const topicsController = require('../controllers/topicsController');
const middlewareController = require("../controllers/middlewareController");


router.get("/getalltopicbyid/:id", topicsController.getAllTopicByIdCourses);
router.post("/addtopicbyidcourses/:id",middlewareController.verifyTokenAndAdminAuth, topicsController.addTopicByIdCourses);


module.exports = router;