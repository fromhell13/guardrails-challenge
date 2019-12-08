const Result = require('../models')

exports.create = async (req,res) => {
    
    try{
        const result = new Result({
            'Status': req.body.Status,
            'RepositoryName': req.body.RepositoryName,
            'Findings': (req.body.Findings)? JSON.parse(req.body.Findings) : [],
            'QueuedAt': req.body.QueuedAt,
            'ScanningAt': req.body.ScanningAt,
            'FinishedAt': req.body.FinishedAt
        })
        let saveResult = await result.save()
        res.send(saveResult)
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
    
}

exports.findAll = async (req,res) => {
    try{
        let findResults = await Result.find()
        res.send(findResults)
    }catch(err){
        res.status(500).send({message: err.message})
    }
}

exports.findOne = async(req,res) => {
    try{
        let findResult = await Result.findById(req.params.resultId);
        console.log(req.params.resultId);
        (findResult)? res.send(findResult) : res.status(400).send({message: `Result not found by id: ${req.params.resultId}`})
    }catch(err){
        (err.kind === 'ObjectId')? 
        res.status(400).send({message: `Result not found by id: ${req.params.resultId}`})
        :
        res.status(500).send({message: err.message})
    }
}
