//Requires
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//Database requires
const db = require('./db')
const todoRouter = require('./routes/todo-router')

//Start app
const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//Start database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//Router for the CRUD commands
app.use('/', todoRouter)

//Final starting of app
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
