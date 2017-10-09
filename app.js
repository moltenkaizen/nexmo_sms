const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Nexmo = require('nexmo')
const config = require('./config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const server = app.listen(3000)


const nexmo = new Nexmo({
  apiKey: config.apiKey,
  apiSecret: config.apiSecret
}, {debug: true})


app.post('/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms(
    config.number, req.body.toNumber, req.body.message, {
      type: 'unicode'
    },
    (err, responseData) => {
      if (responseData) {
        console.log(responseData)
        res.send(responseData)
      }
    }
  )
})