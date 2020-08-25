//Asynchronous
/*
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('input.html', function (err, data) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(4000);
*/

/*
//Asynchronous read
var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
    if(err)
        return console.log(err);
    console.log("Async read : "+data.toString())
});

//Synchronous read
var fs = require('fs');
var data = fs.readFileSync('input.txt')
console.log("Sync read : "+data.toString());
console.log("end of program");
*/

