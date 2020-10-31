const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const members = require('./Members')
// const logger = require('./middleware/logger')
const app = express()

// Init middleware
// app.use(logger)


// app.get('/', (req,res)=> {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Homepage Route
app.get('/', (req, res) => res.render('index',{
    title: 'Member App',
    members
}))

app.use('/api/members', require('./routes/api/members'))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
