const mongoose = require('mongoose')

// Create schema
const Schema = mongoose.Schema

// Structuring Student Schema
const StudentSchema = new Schema({
    sname: String,
    regno: Number,
    contact: Number,
    active: Boolean
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student