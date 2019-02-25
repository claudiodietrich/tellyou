const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use((error, req, res, next) => {
  const status = error.statusCode || 500
  res.status(status).json(error.message)
})

async function startServer () {
  try {
    await mongoose.connect('mongodb://localhost:27017/tellyou', { useNewUrlParser: true })
    app.listen(3000)
  } catch (error) {
    console.log(error.message)
  }
}

startServer()
