//=========== Imports ============//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//================//

const userModel = require("./model/user");

//=========== Imports ============//

//=========== Port ============//
const port = 3000;
//=========== Port ============//

//=========== Set View Engine ============//
app.set("view engine", "ejs");
//=========== Set View Engine ============//

//=========== Middelwares ============//
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//=========== Middelwares ============//

//=========== Routes ============//
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { username, email, password, age } = req.body;
  //   console.log( username, email, password, age)

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      // Store hash in your password DB.
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      let token = jwt.sign({ email }, "secretkey");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});


app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.clearCookie("tokenLogggedin");
    res.redirect("/");
  });


app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("404! Something went wrong");
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (!result) {
      res.send("something went wrong");
    } else {
        let token = jwt.sign({email: user.email }, "secretkey");
        res.cookie("tokenLogggedin", token);
      res.send("Loggedin");
    }
  });

  console.log(user.password);
});
//=========== Routes ============//

//=========== Server Listenting ============//
app.listen(port, (req, res) => {
  console.log(`server is listening on port ${port}`);
});
//=========== Server Listenting ============//
