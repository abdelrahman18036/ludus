const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profilePicture: {
    type: String,
    default:
      "http://localhost:3000/static/media/avatar-01.657c1179ed130b2cf0f1.png",
  },
  dateOfBirth: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
