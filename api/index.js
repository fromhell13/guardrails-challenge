// index.js

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// === setup controller ===
const ResultController = require('./app/controllers')

// === setup mongo connection ===
const Mongo = require('./app/config/dbconnection')
const mongo = new Mongo()
try{
    console.log('hoi')
    mongo.connect()
}catch(err){
    console.log(err.message)
}


// === set body parser to accept POST form data ===
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// === setup helmet to secure express ===
const helmet = require('helmet')
app.use(helmet())

// === Start route ===
app.get('/', (req,res) => {res.send('Welcome to Guardrails API v1.0')})

app.post('/result', ResultController.create) // Create new Result
app.get('/result', ResultController.findAll) // Find all Result
app.get('/result/:resultId', ResultController.findOne) // Find Result by Id



// setup port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is up and running at port: ${port}`)
})