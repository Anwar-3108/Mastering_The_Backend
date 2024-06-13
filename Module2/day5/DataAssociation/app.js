//======Imports======//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
//================//

const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require("./models/user");

//======Imports======//

//======Port======//
const port = 3000;
//======Port======//

//======Set Engine======//
app.set("view engine", "ejs");
//======Set Engine======//

//======Middelwares======//
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//======Middelwares======//

//======Routes======//

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create", async (req, res) => {
  let userData = await userModel.create({
    name: "Anwar Rizwan",
    email: "helloanwar975@gmail.com",
    age: 24,
  });

  res.send(userData);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "takbeer !!!",
    user: "666b0374992e42bf4b47c889",
  });

  let user = await userModel.findOne({ _id: "666b0374992e42bf4b47c889" });
  user.post.push(post._id);
  await user.save();
  res.send({  post,  user });
});
//======Routes======//

//======Server Listening======//
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
//======Server Listening======//
