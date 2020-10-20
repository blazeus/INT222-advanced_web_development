const express = require('express')
//init app
const app = express()
//init EJS
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('profile')
}).listen(8085)
