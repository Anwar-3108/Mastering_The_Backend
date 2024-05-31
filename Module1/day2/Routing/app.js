const express = require("express");

const app = express();
const port = 3002;
// home route 
app.get("/", (req, res) => {
  res.send("hello from rountinghome");
});
//about route
app.get("/about", (req, res) => {
  res.send("hello from rountingabout");
});

//profile route (static)
app.get("/profile/anwar", (req, res) => {
  res.send("hello from /profile/anwar");
});
//profile route (dynamic)
app.get("/profile/:username", (req, res) => {
  res.send(`hello from /profile/${req.params.username}`);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
