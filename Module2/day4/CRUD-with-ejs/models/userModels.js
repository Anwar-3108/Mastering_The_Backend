const { name } = require("ejs");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudWithEjs");

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  imageURL: String,
});

module.exports = mongoose.model("user", userSchema);
