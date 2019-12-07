const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resultSchema = new Schema({
    Status: String,
    RepositoryName: String,
    Findings: {type: Object, default: null},
    QueuedAt: {type: Date, default: Date.now()},
    ScanningAt: {type: Date, default: Date.now()},
    FinishedAt: {type: Date, default: Date.now()}
})
resultSchema.set('timestamps', true)
module.exports = mongoose.model('Result', resultSchema)