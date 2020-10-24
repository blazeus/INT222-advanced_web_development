var http = require('http')
var url = require('url')
var date = require('./dateTime')

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    // URL parser
    // var q = url.parse(req.url, true).query
    // var txt = q.year + " " + q.month
    // res.end(txt)

    // Sample writehead
    res.write('The query URL is: ' + req.url + '<br>')
    res.end(date.dateTime())

}).listen(8080)