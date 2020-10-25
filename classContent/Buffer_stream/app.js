var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended:false
}))

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/submit-student-data', (req,res)=>{
    var name = req.body.firstname + " " + req.body.lastname
    res.send(name + ' submitted successfully!')
})

// app.put('/update-data', (req,res)=>{
//     res.send('PUT Request')
// })

// app.delete('delete-data',(req,res)=>{
//     res.send('delete request')
// })

var server = app.listen(8081,()=>{
    console.log('node server is running')
})