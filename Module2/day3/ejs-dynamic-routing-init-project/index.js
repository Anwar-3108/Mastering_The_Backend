const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/auth/1", (req, res) => {
  // static route
  res.send("auth1");
});
app
  .get("/auth/:id", (req, res) => {
    //dynamic route
    res.send(`auth = ${req.params.id}`);
  })
app
  .get("/auth/:name/:id", (req, res) => {
    //dynamic route
    res.send(`auth name = ${req.params.name} and auth id = ${req.params.id}`);
  })
  .listen(3000, () => {
    console.log(`listening on port 3000`);
  });

console.log(path.join(__dirname, "public"));
