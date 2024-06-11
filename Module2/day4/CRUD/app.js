const express = require("express");
const app = express();
const port = 3000;
const userModel = require("./usermodel");

// =======================  Routes    =========================//

//============home==================//
app.get("/", (req, res) => {
  res.send("this is homepage");
});

//===========create================//

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "anwar rizwan",
    age: 23,
    email: "syed1234@gmail.com",
  });

  res.send(createdUser);
});

//=============read================//

app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();

  res.send(allUsers);
});

//=============update=============//

app.get("/update", async (req, res) => {
  let updated = await userModel.findOneAndUpdate(
    { name: "anwar rizwan" },
    { name: "syed anwar rizwan" },
    { new: true }
  );

  res.send(updated);
});

//=============delete===========//

app.get("/delete", async (req, res) => {
  let deteledUser = await userModel.findOneAndDelete({ name: "anwar" });

  res.send(deteledUser);
});

//=======   listening the server on port 3000   ========//

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
