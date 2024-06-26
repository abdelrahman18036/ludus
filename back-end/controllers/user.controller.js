const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.registerUser = async (req, res) => {
  const newUser = new User({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isAdmin: req.body.isAdmin || false,
  });

  try {
    await newUser.save();
    res.send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while registering the User.",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400,
    });

    res.status(200).send({
      id: user._id,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.updateUser = async (req, res) => {
  const updateData = req.body;

  if (updateData.profilePictureUrl) {
    updateData.profilePicture = updateData.profilePictureUrl;
    delete updateData.profilePictureUrl;
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send(user);
  } catch (error) {
    console.error("Failed to update user:", error);
    res
      .status(500)
      .send({ message: "Failed to update user", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select(
      "username email full profilePicture"
    );
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.verifyToken = (req, res) => {
  res.status(200).send({ message: "User is authenticated" });
};
