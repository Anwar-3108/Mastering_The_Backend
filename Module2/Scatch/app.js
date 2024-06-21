const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hey");
});

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
