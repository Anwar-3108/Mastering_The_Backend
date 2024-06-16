//======= Imports ==========//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//==============//
const userModel = require("./models/user");
const postModel = require("./models/post");

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
//==============//
const isLoggedIn = require("./Middleware/authMiddleware");

//======= Middelwares ==========//

//======= Routes ==========//
app.get("/", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: res.userData.email });

  res.render("index", { user });
});
app.get("/notFound", (req, res) => {
  res.render("notFound");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

app.post("/register", async (req, res) => {
  const { name, email, password, username, age } = req.body;
  // console.log(name, email, password)
  // res.send("done");
  let user = await userModel.findOne({ email });
  if (user) return res.send("404! Something went wrong");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      let user = await userModel.create({
        name,
        email,
        username,
        age,
        password: hash,
      });
      let token = jwt.sign({ email: email, userid: user._id }, "lolopopo");
      res.cookie("token", token);
      res.redirect("/login");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) return res.status(404).redirect("/register");
  bcrypt.compare(password, user.password, (err, result) => {
    if (!result) {
      res.status(401).redirect("/notFound");
    } else {
      let token = jwt.sign({ email: email, userid: user._id }, "lolopopo");
      res.status(200);
      res.cookie("token", token);

      res.redirect("/");
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

//======= Routes ==========//

// function isLoggedIn(req, res, next) {
//   if (req.cookies.token) {
//     let userData = jwt.verify(req.cookies.token, "lolopopo");
//     console.log(userData);
//     res.locals.userData = userData;
//     next();
//   } else {
//     res.redirect("/login");
//   }
// }

//======= Server Listening ==========//
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
//======= Server Listening ==========//
