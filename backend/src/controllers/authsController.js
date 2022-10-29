const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtComponents = require("../config/conponents/jwt");
const UsersModel = require("../models/UsersModel");

let refreshTokens = [];
class AuthsController {
  async register(req, res, next) {
    try {
      //Lưu các giá trị từ req.body
      const { username, password, name, email, pswRepeat } = req.body;

      //tạo biến errors với kiểu giá trị là array
      var errors = [];

      //Check required fields
      if (!username || !name || !email || !password || !pswRepeat) {
        errors.push({
          //thêm vào mảng errors với giá trị msg
          msg: " Please fill in all fields",
        });
      }

      //kiểm tra nhập lại pass các giống không?
      if (password !== pswRepeat) {
        //thêm vào mảng errors với giá trị msg
        errors.push({
          msg: "Passwords do not match",
        });
      }

      //kiểm tra độ dài của pass đã nhập không được ít hơn 6 kí tự
      if (password.length < 6) {
        //thêm vào mảng errors với giá trị msg
        errors.push({
          //thêm vào mảng errors với giá trị msg
          msg: "Password should be at least 6 characters",
        });
      }

      if (errors.length > 0) {
        return res.status(500).json(errors);
      } else {
        // validation passed
        await UsersModel.findOne({ username: username }).then((user) => {
          //User exists(kiểm tra sự tồn tại của user)
          if (user) {
            //thêm vào mảng errors với giá trị msg
            errors.push({ msg: "Username is already register" });
            return res.status(500).json(errors);
          }
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt); // mã hóa mật khẩu

      //craete new user
      const newUser = await new UsersModel({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        name: req.body.name,
      });

      //save to DB
      const user = await newUser 
        .save()
        .then((user) => {
          //lưu trữ mess vào flash để hiển thị lên client
          res.status(200).json("You are now registerd a can login");
          res.redirect("/auth/login");
        })
        .catch((err) => console.log(err));
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async login(req, res, next) {
    try {
      const user = await UsersModel.findOne({ username: req.body.username });

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
        res.cookie("idUser", user._id, {
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
