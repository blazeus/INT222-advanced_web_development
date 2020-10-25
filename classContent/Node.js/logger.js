const EventEmitter = require('events')

class Logger extends EventEmitter{
    log(message){
        var x,y;
        //sends an HTTP request
        this.emit('messagblog', {x, y});
        console.log(this.x + this.y)
    //emit raise an event
    //this references logger class itself, which extends EventEmitter here you need not to create
    }
}

module.exports=Logger;