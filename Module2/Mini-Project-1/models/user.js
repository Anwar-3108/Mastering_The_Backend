const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/miniProject");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  profilepic: { type: String, default: "default-image.avif" },
  age: Number,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
