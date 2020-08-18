// const events = require('events');   //Importing Event Module
// const { listenerCount } = require('process');

// //Creating Instance of event Emitter
// const eventEmitter = new events.EventEmitter()

// var warns = function() {
//     console.log('bark');
// }

// eventEmitter.on('DOG',warns);   //listener
// eventEmitter.emit('DOG');   //emitter
// console.log(listenerCount('warns'))

const eventEmitter = require('events');
class MyEmitter extends eventEmitter{};
var emitter = new MyEmitter();

emitter.on("events", ()=>{ 
    console.log("event emitter");
});

console.log(emitter.listenerCount("events"));