//==========================Imports========================//
const express = require("express");
const app = express();
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "mypassword";
const someOtherPlaintextPassword = "not_bacon";
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 3000;

//==========================Imports========================//

//============== Middelwares ============//
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
//============== Middelwares ============//

//============== Routes ============//

//index

//=====JWT======
app.get("/", async (req, res) => {
  var token = await jwt.sign({ email: 'syed123@mail.com' }, 'secret');
  console.log(token)
  res.cookie("token" ,token)

  res.send("working");
});
//reading(decrypting) jwt token 
app.get('/read',(req, res)=>{
  var token = req.cookies.token
  console.log(token)
  jwt.verify(token,'secret',(err,decoded)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(decoded)
    }
  })
  res.send("read")
})



//====bcrypt===

// app.get("/", async (req, res) => {
//   await bcrypt.compare(
//     myPlaintextPassword,
//     "$2b$10$ahPBjgr0oCMHAXbmjZh5he7d5XJwEZWH2NpLROvRjf9PVZcT7J1lq",
//     function (err, result) {
//       // result == true
//       console.log(result);
//     }
//   );
//   res.send("working");
// });

//read
// app.get("/read", (req, res) => {
//   console.log(req.cookies.name);
//   res.render("read");
// });

//============== Routes ============//

//==========================Server Listening ============================//
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
//==========================Server Listening ============================//
