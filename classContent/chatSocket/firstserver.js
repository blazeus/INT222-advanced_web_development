//------------------------------- Using Express as HTTP server ----------------------------------
// var app = require('express').createServer()
// var io = require('socket.io').listen(app)

// io.sockets.on('connection',function(socket){
//     console.log(`user is connected`)
// })

// app.listen(3000)

//------------------------------- Using Node.js as HTTP server ----------------------------------
// var app = require('http').createServer(callback)
// var io = require('socket.io').listen(app)
// app.listen(3000)


// Client side js code
{/* <script src= 'socket.io/socket.io.js'>
    var nothing = ""
</script>

<script>
    var socket = io.connect()
    socket.on('connect',function(){
        var uname = prompt('enter your name')
        this.emit('Set username',uname)
    })
</script> */}


//recieve messages from client to server
var app = require('express').createServer()
var io = require('Socket.io').listen(app)

io.sockets.on('connection',function (socket) {
    console.log('someone connected')
    socket.on('set username', function(username) {
        socket.username = username
        console.log('username' + 'just connected')
    })
})
app.listen(3000)

//message acknowledgement
{/* <script src = '/socket.io/scoket.io.js'></script> 
    <script>
        var socket = io.connect()
        socket.on('connect', function(){
            console.log('we are connected with server')
            var name = prompt('enter your name')
            this.emit('name', name, function(success){
                console.log('the server recieved the message')
                if (!success){
                    console.log('name is already in use')
                }
            })
        })
    </script>
*/}