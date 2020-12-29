const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => console.log("The start event is activated!"))

setTimeout(() => eventEmitter.emit('start'), 1000)