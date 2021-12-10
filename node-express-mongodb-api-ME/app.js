const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = 5000


require('dotenv/config')

//Middlewares -> basically a function that will the receive the Request and Response objects
app.use(bodyParser.json())
app.use(cors())


const emailsRouter = require('./routes/emails.js')
app.use('/emails', emailsRouter)


//connection
mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected"))

app.get('/', (req, res) => {
    res.send("Hello!")
})


app.listen(PORT, () => console.log(`the server is running on localhost:${PORT}`))