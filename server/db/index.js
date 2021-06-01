const mongoose = require('mongoose')

const mongoURL = 'mongodb+srv://raytonlin1:charmander@cluster0.ha1a8.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose
    .connect(mongoURL, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db