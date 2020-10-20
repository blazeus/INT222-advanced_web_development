const express = require('express')
//init app
const app = express()
app.use('/assets',express.static('assets'))
//init EJS
app.set('view engine','ejs')

app.get('/profile/:name',(req,res)=>{
    data = {
        email:'demo@test.com',
        add:'Punjab',
        skills:['nodejs','php','larvel'],
    }
    res.render('profile',{name:req.params.name,data:data})
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/login',(req,res)=>{
    res.render('login')
})


app.listen(8085)
