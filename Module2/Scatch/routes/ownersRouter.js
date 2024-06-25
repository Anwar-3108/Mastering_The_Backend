const express = require("express");
const router = express.Router();
const ownerModel= require('../models/owner-model')

router.get("/", (req, res) => {
  res.send("this is owners page");
});


if('NODE_ENV:', process.env.NODE_ENV){
  router.post("/create", (req, res) => {
    res.send("this is create route");
  });
}



module.exports = router;
