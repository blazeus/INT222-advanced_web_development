var fs = require('fs');
console.log("file info to be collected"); 
fs.stat('input.txt',function(err,stats){
    if(err){
        return console.error(err)
    }
    console.log(stats)
    console.log("file info collected successfully");

    //check file type
    console.log("isFile> "+stats.isFile());
    console.log("?isDirectory ? " + stats.isDirectory());
});