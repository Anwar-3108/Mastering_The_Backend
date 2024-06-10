const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// console.log(path.join(__dirname, "public"));

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    // console.log(files);
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    }
  );
});
app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});
app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filedata: filedata });
  });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
