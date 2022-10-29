const TopicsModel = require("../models/TopicsModel");
const DetailsModel = require("../models/DetailsModel");

class InforController {
  async addInfo(req, res, next) {
    try {
      const verify = await DetailsModel.count({
        name_detail: req.body.name_detail,
      });

      if (verify > 0) {
        return res.status(500).json("Đã tồn tại");
      } else {
        TopicsModel.findById({ _id: req.params.id }).then((topic) => {
          const newInfor = new DetailsModel({
            name_detail: req.body.name_detail,
            definition: req.body.definition,
            example: req.body.example,
            pronounce: req.body.pronounce,
            image: req.body.image,
            topic: topic._id,
          });

          const detail = newInfor.save();
          return res.status(200).json(detail);
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = new InforController();
