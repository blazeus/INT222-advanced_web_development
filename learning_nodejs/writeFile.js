var fs = require('fs')

fs.writeFile('./index.html','html file', (err)=>{
    if (err) throw err 
    console.log('Replaced file')
})