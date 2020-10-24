var http = require('http')
var date = require('./dateTime')

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('The query URL is: ' + req.url + '<br>')
    res.end(date.dateTime())

}).listen(8080)