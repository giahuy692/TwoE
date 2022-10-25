const router = require("express").Router();

const uploads = require('../middleware/upload');
const topicsController = require('../controllers/topicsController');

router.get("/getalltopicbyid/:id", topicsController.getAllTopicByIdCourses);


module.exports = router;