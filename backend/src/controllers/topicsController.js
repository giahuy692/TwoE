const TopicsModels = require("../models/TopicsModel");

class topicsControlles {
  async getAllTopicByIdCourses(req, res, next) {
    TopicsModels.find({ course: req.params.id })
      .then((topics) => {
        res.status(200).json(topics);
      })
      .catch((error) => console.log(error));
  }

  async addTopicByIdCourses(req, res, next) {
    try {
      const newTopic = await new TopicsModels({
        name_topic: req.body.name_topic,
        image_topic: req.body.image_topic,
        course: req.params.id,
      });
      const topic = await newTopic.save();
      return res.status(200).json(topic);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new topicsControlles;
