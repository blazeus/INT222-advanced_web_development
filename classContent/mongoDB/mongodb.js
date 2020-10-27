const express = require('express')
const mongoose = require('mongoose')
const app = express()
var url = "mongodb+srv://eternalUser:user1234@eternalcluster.ofwrx.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.warn('database connected'))