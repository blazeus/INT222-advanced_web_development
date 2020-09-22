var express = require('express')
var app = express();

app.get("/", function(req,res){ //route
    res.send("hello world");
})
var server = app.listen(8081,()=>{
    var host = server.address().address
    var port = server.address().port
    console.log("The server is listening to the host : %s at port : %s",host,port);
})