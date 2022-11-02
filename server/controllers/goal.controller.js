const {Goal} = require('../models/app.model')

module.exports.findAllGoals = (req, res) => {
    Goal.find()
    .then((allGoals) => {
        console.log(allGoals)
        res.json(allGoals)
    }) 
    .catch((err) => {
        console.log("findAllGoals has failed!")
        res.json({ message: "Something went wrong with findAllGoals", error: err })
})}

module.exports.findGoalById = (req, res) => {
    Goal.findOne({ _id: req.params.id })
        .then(oneGoal =>  res.json(oneGoal) ) 
        .catch((err) => res.json({ message: 'Something wrong with findGoalById', error: err })
)}

module.exports.createGoal = (req, res) => {
    Goal.create(req.body)
        .then(newGoal => res.json( newGoal ))
        .catch((err) => res.json({ message: 'Something wrong with createGoal', error: err })
)}

module.exports.updateGoal = (req, res) => {
    Goal.findOneAndUpdate( 
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedGoal => res.json( updatedGoal ))
        .catch((err) => res.json({ message: 'Something wrong with updateGoal', error: err })
)}

module.exports.deleteGoal = (req, res) => {
    Goal.deleteOne({ _id: req.params.id })
        .then(result => res.json( result )) 
        .catch((err) => res.json({ message: 'Something wrong with deleteGoal', error: err })
)}