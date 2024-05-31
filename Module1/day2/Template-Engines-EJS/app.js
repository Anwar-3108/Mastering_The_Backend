const express = require('express');
const app=  express();
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.get('/',(req, res)=>{
    res.render('index', {name:"dragon"});
})
app.get('/contact',(req, res)=>{
    res.render('contact');
})
app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})
