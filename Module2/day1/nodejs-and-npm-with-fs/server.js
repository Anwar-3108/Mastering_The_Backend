//===this will not work without SSL/TSL

// const https = require('node:https');

// const server = https.createServer((req, res)=>{
//     res.end("hello world") ;
// });

// server.listen(3000, ()=>{
//     console.log("server is running on port 3000");
// });

//===this will work without SSL/TSL
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
