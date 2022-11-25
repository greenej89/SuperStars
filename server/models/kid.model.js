const mongoose = require('mongoose')
const {Goal} = require('./goal.model')
    
const KidSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
            minLength: [2, "Name must be at least 2 characters."]
        },
        imageURL: {
            type: String,
            default: 'https://cdn-icons-png.flaticon.com/512/206/206880.png'
        },
        goals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goal'
            // validate: [arrayLimit, "Maximum number of goals is 5"]
        }]
    },
    {timestamps: true})

    // function arrayLimit(value) {
    //     return value.length <= 5
    // }

//Before the deleteOne function is run on the Kid
KidSchema.pre('deleteOne', async function(next) {
    //Retrieve the kid document's information for reference
    const kidDocument = await this.model.findOne(this.getFilter()) 
    //Try to delete all Goals that have an id listed in the Kid's goals array
    try {
        await Goal.deleteMany({_id: { $in: kidDocument.goals } })
        next() //Then continue running the deleteOne function on Kid
    } catch(err) {
        console.log("Uh oh, something broke when deleting an associated goal", err)
        next(err)
    }
})
const Kid = mongoose.model('Kid', KidSchema)
    
module.exports = {Kid}