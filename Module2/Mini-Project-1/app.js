//======= Imports ==========//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
//==============//
const userModel = require("./models/user");

//======= Imports ==========//

//======= Port ==========//
const port = 3000;
//======= Port ==========//
//======= Set Engine ==========//

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//======= Set Engine ==========//

//======= Middelwares ==========//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//======= Middelwares ==========//

//======= Routes ==========//
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/registerd", (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password)
  res.send("done");
});

//======= Routes ==========//

//======= Server Listening ==========//
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
//======= Server Listening ==========//
