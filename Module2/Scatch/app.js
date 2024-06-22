//======= Imports ========//
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

//========//
const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
//======= Imports ========//

//======= Port ========//
const port = 3000;
//======= Port ========//

//======= Middelwares ========//
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//======= Middelwares ========//

//======= Set Engine ========//
app.set("view engine", "ejs");
//======= Set Engine ========//

//======= Routes ========//
// app.get("/", (req, res) => {
//   res.send("hey");
// });

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

//======= Routes ========//

//======= Listening Server ========//
app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`);
});
//======= Listening Server ========//
