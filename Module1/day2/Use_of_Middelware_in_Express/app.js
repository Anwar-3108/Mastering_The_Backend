const express = require("express");

const app = express();

//Middelware function
app.use((req, res, next) => {  
  console.log(`this is middelware 1`);
  next();
});
app.use((req, res, next) => {  
  console.log(`this is middelware 2`);
  next();
});



const PORT = 3001;
app.get("/", (req, res) => {
  res.send("this is homepage");
});
app.get("/about", (req, res) => {
  res.send("this is about");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
