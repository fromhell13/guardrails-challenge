const mongoose = require('mongoose')
const configDB = require('../config/database')

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

class Mongo {
    constructor(){}

    async connect(){
        try{
            await mongoose.connect(configDB.url, {
              autoReconnect: true,
              reconnectTries: 1000000,
              reconnectInterval: 3000,
              useNewUrlParser: true
            })
        }catch(err){  
            throw new Error(`Error message: ${err.message}`)
        }
        
    }
}

module.exports = Mongo

