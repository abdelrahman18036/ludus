const User = require("../models/user");

exports.updateUserProfile = async (req, res) => {
  const { bio, profilePicture, dateOfBirth } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        bio,
        profilePicture,
        dateOfBirth,
      },
      { new: true }
    ); // Returns the updated document
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: "Error updating user profile.", error });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user profile.", error });
  }
};
