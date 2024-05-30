const express = require('express');

const app= express();
const PORT= 4000
app.get('/',(_,res)=>{
res.send('this is homepage');
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})