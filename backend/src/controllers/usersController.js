const { findById } = require("../models/UsersModel");
const User = require("../models/UsersModel");
const { param } = require("../routes/auth");

class UsersControllers {
  async getAllUser(req, res, next) {
    try {
      const user = await User.find().count();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const user = User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Delete successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async countUser(req, res, next) {
    try {
      const user = await User.find().count();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UsersControllers();
