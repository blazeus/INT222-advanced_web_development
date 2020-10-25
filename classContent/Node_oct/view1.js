const express = require('express')
//init app
const app = express()
//init EJS
app.set('view engine','ejs')

app.get('/profile/:name',(req,res)=>{
    data = {
        email:'demo@test.com',
        add:'Punjab',
        skills:['nodejs','php','larvel'],
    }
    res.render('profile',{name:req.params.name,data:data})
}).listen(8085)
