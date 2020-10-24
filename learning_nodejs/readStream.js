var fs = require('fs')
var rs = fs.createReadStream('./index.html')
rs.on('open', ()=>{
    console.log('File is open')
})