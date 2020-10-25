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
*/

//Synchronous read
var fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf8')
console.log("\nAfter reading from file: input.txt")
console.log("Sync read : "+data.toString());

//Synchronous write 
fs.writeFileSync('output.txt', data)
var output = fs.readFileSync('output.txt', 'utf8')
console.log("\nAfter writing from file: input.txt to file: output.txt")
console.log("Output : " + output.toString());

console.log("\nAfter appending the content to output.txt ")
const appendData = 'appended this line. '
fs.appendFileSync('output.txt', " " + appendData, function(err) {
    if(err) throw err;
    console.log('appended data');
})

var output = fs.readFileSync('output.txt', 'utf8')
console.log("Output : " + output.toString());

var result = output.replace(/line./gi, 'ver:1.3sp');
fs.writeFileSync('output.txt', result, 'utf8', 
function(err) {
    if (err) return console.log(err);
})

var output = fs.readFileSync('output.txt', 'utf8')
console.log("Output : " + output.toString());

var fs = require('fs');
fs.watch('input.txt',(event,filename)=>{
    console.log(event)
    if(filename){
        console.log(`${filename} file is changed`);
        console.log('New content is : \n')
        var data = fs.readFileSync('input.txt', 'utf8')
        console.log("Sync read : "+data.toString());
    }
})