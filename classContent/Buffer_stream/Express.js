var express = require('express')
var app = express();

app.get("/", function(req,res){
    res.send("hello world");
    console.log("hello");
}).listen(8081)