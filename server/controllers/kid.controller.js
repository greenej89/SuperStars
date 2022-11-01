const {Kid, Goal} = require('../models/kid.model')

module.exports.findAllKids = (req, res) => {
    Kid.find()
    .then((allKids) => {
        console.log(allKids)
        res.json(allKids)
    }) 
    .catch((err) => {
        console.log("findAllKids has failed!")
        res.json({ message: "Something went wrong with findAllKids", error: err })
})}

module.exports.findKidById = (req, res) => {
    Kid.findOne({ _id: req.params.id })
        .then(oneKid =>  res.json(oneKid) ) 
        .catch((err) => res.json({ message: 'Something wrong with findKidById', error: err })
)}

module.exports.createKid = (req, res) => {
    Kid.create(req.body)
        .then(newKid => res.json( newKid ))
        .catch((err) => res.json({ message: 'Something wrong with createKid', error: err })
)}

module.exports.updateKid = (req, res) => {
    Kid.findOneAndUpdate( 
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedKid => res.json( updatedKid ))
        .catch((err) => res.json({ message: 'Something wrong with updateKid', error: err })
)}

module.exports.deleteKid = (req, res) => {
    Kid.deleteOne({ _id: req.params.id })
        .then(result => res.json( result )) 
        .catch((err) => res.json({ message: 'Something wrong with deleteKid', error: err })
)}