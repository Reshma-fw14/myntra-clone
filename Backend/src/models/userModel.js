const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema({
  fullName: { type: String, minlength: 2 },
  email: { type: String, minlength: 6 },
  password: { type: String, required: true },
  token: { type: String },

});

module.exports = mongoose.model("User", user_Schema);