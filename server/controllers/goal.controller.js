const {Kid, Goal} = require('../models/app.model')


module.exports.findAllGoals = (req, res) => {
    Goal.find()
    .then((allGoals) => {
        console.log(allGoals)
        res.json(allGoals)
    }) 
    .catch((err) => {
        console.log("findAllGoals has failed!")
        res.status(400).json(err)
})}

module.exports.findGoalById = (req, res) => {
    Goal.findOne({ _id: req.params.id })
        .then(oneGoal =>  res.json(oneGoal) ) 
        .catch((err) => res.status(400).json(err)
)}

//Creates a new goal and adds it to the specified kid's goals array
module.exports.createGoal = async (req, res) => {
    try{
        const newGoal = await Goal.create(req.body)
        // Run an asynchronous function to push newGoal id to kid.goals
        const updatedKidWithGoal = await Kid.findOneAndUpdate(
            { _id: newGoal.kidId }, //Find the kid by the id
            { $push: { goals: newGoal._id } },  //Push the newGoal id to the kid's goals array
            { new: true }   //returns the kid
        )
        res.status(200).json(updatedKidWithGoal)    //Return the updated kid to front end upon successful creation
    } catch(err) {
        res.status(400).json(err) //Return the error to the front end
    }
}

module.exports.updateGoal = (req, res) => {
    Goal.findOneAndUpdate( 
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedGoal => res.json( updatedGoal ))
        .catch((err) => res.status(400).json(err)
)}

module.exports.deleteGoal = (req, res) => {
    Goal.deleteOne({ _id: req.params.id })
        .then(result => res.json( result )) 
        .catch((err) => res.status(400).json(err)
)}