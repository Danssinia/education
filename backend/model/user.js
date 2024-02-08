const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastNamae: String,
  email: {
    type: String,
    required: [true, "why no email"],
    unique: [true, "why same email"],
  },
  password: {
    type: String,
    required: true,
    min: [600, "Weak password"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
