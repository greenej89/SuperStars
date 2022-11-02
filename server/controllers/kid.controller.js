const {Kid} = require('../models/app.model')

module.exports.findAllKids = (req, res) => {
    Kid.find()
    .then((allKids) => res.json(allKids))
    .catch((err) => res.status(400).json(err))
}

module.exports.findKidById = (req, res) => {
    Kid.findOne({ _id: req.params.id })
        .then(oneKid => res.json(oneKid) ) 
        .catch((err) => res.status(400).json(err))
}

module.exports.createKid = (req, res) => {
    Kid.create(req.body)
        .then(newKid => res.json( newKid ))
        .catch((err) => res.status(400).json(err))
}

module.exports.updateKid = (req, res) => {
    Kid.findOneAndUpdate( 
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedKid => res.json( updatedKid ))
        .catch((err) => res.status(400).json(err))
}

module.exports.deleteKid = (req, res) => {
    Kid.deleteOne({ _id: req.params.id })
        .then(result => res.json( result )) 
        .catch((err) => res.status(400).json(err))
}