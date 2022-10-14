const User = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtComponents = require("../config/conponents/jwt");

let refreshTokens = [];
class AuthsController {
  async register(req, res, next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt); // mã hóa mật khẩu

      //craete new user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        name: req.body.name,
        age: req.body.age,
      });

      //save to DB
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async login(req, res, next) {
    try {
      const user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.status(404).json("Wrong username");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        return res.status(404).json("Wrong password");
      }

      if (user && validPassword) {
        const accessToken = jwtComponents.generateAccessToken(user);
        const refreshToken = jwtComponents.generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          // path:'/',
          sameSite: "strict",
        });
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async requestRefreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
        const newAccessToken = jwtComponents.generateAccessToken(user);
        const newRefreshToken = jwtComponents.generateRefreshToken(user);
        res.cookie("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: false,
          // path:'/',
          sameSite: "strict",
        });
        res.status(200).json({ accessToken: newAccessToken });
      }
    });
  }

  async logout(req, res, next) {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.status(200).json("Logged out !!!");
  }
}

module.exports = new AuthsController();
