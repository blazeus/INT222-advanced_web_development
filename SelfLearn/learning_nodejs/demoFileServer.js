var http = require('http')
var url = require('url')
var fs = require('fs')
var events = require('events')

var eventEmitter = new events.EventEmitter()

// Event handler
var eventHandler = ()=>{
    console.log("The file is successfully opened!")
}

// Assigning event handler to an event
eventEmitter.on('success', eventHandler)

http.createServer((req,res)=>{
    var q = url.parse(req.url, true)
    var filename = './' + q.pathname
    fs.readFile(filename,(err,data)=>{
        if(err) {
            res.writeHead(400, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        eventEmitter.emit('success')
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)