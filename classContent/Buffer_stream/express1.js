var express = require('express')
var app = express();

// app.get("/", function(req,res){ //route
//     res.send("hello world");

// })
// var server = app.listen(8081,()=>{
//     var host = server.address().address
//     var port = server.address().port
//     console.log("The server is listening to the host : %s at port : %s",host,port);
// })


app.get("/", (req,res)=>{
    res.send(`
    <html>
        <body>
            <h1>Hello MY ke mahadabang</h1>
        </body>
    </html>`
    )
})

app.post('/submit-student-data', (req,res)=>{
    res.send('post request')
})

app.put('/update-data', (req,res)=>{
    res.send('PUT Request')
})

app.delete('delete-data',(req,res)=>{
    res.send('delete request')
})

var server = app.listen(8081,()=>{
    console.log('node server is running')
})