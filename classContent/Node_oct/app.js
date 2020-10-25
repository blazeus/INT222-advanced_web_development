const express = require('express')
//init app
const app = express()
//init EJS
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/contact',(req,res)=>{
    res.send('My contact page')
})

app.listen(8085,()=>{
    console.log('server listening on 8085')
})