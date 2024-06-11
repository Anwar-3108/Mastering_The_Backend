const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const userModel = require("./models/userModels");
const { name } = require("ejs");
const { emit } = require("process");
//==================================================================================================================//

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  let { name, email, imageURL } = req.body;
  await userModel.create({
    name: name,
    email: email,
    imageURL: imageURL,
  });

  res.redirect("/read");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  //   console.log(users);
  res.render("read", { users: users });
});
app.get("/edit/:_id", async (req, res) => {
  let id = req.params._id;
  let userData = await userModel.find({ _id: id });

  res.render("edit", { userData: userData });
});

app.post("/edit/:_id", async (req, res) => {

  let UpdatedData = req.body;
  console.log(UpdatedData);
  await userModel.findOneAndUpdate({ _id: req.params._id }, UpdatedData, {
    new: true,
  });

  res.redirect("/read");
});

app.get("/delete/:_id", async (req, res) => {
  const id = req.params._id;
  await userModel.findOneAndDelete({ _id: id });
  res.redirect("/read");
});
//==================================================================================================================//
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
