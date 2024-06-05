const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Parses JSON-formatted request bodies.
app.use(express.urlencoded({extended:true})) ;//Parses URL-encoded request bodies


//middelware
app.use((req, res, next) => {
  console.log("middelware chala");
  next();
});


app.use((req, res, next) => {
  console.log("middelware chala once again");
  next();
});

//route
app.get("/", (req, res) => {
  res.send("<h1>hola<h1/>");
})

app.get("/about", (req, res) => {
  res.send("<h1>about<h1/>");
});


//error handeling
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
