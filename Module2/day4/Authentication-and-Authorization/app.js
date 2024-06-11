//==========================Imports========================//
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;

//==========================Imports========================//

//============== Middelwares ============//
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
//============== Middelwares ============//

//============== Routes ============//



//index
app.get("/", (req, res) => {
  res.cookie("name", "anwar");
  res.render("index");
});


//read
app.get("/read", (req, res) => {
  console.log(req.cookies.name);
  res.render("read");
});




//============== Routes ============//

//==========================Server Listening ============================//
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
//==========================Server Listening ============================//
