const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const User = require("../models/user");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).exec();

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    if (user.isAdmin) {
      next();
      return;
    }

    res.status(403).send({ message: "Require Admin Role!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  verifyToken,
  isAdmin,
};
