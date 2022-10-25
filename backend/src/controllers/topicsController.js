const TopicsModels = require('../models/TopicsModel');

class topicsControlles{
    async getAllTopicByIdCourses(req, res, next) {
        TopicsModels.find({course: req.params.id}).then((topics) => {
            res.status(200).json(topics);
        }).catch(error => console.log(error))
    }
}

module.exports = new topicsControlles;