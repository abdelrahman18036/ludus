const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profilePicture: { type: String, default: "" },
  dateOfBirth: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
