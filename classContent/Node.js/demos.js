const http = require("http");
// function reqListener(req,res){
//     console.log("hello");
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world');
// }

const server = http.createServer((req,res)=>{
    const content = 
    `<html>
        <head>
            <title>
                Form
            </title>
        </head>
        <body>
            <h1>I am listening to node server! </h1>
        </body>
    </html>`
    // content = content.toString()
    res.write(content);
    res.end();
});
server.listen(4000);
