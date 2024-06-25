require("dotenv").config();
const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(() => {
    debug("Database connected");
  })
  .catch((err) => {
    debug("Error connecting to the database:", err);
  });

module.exports = mongoose.connection;
