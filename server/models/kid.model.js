const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema(
    {
        // kid_id: {
        //     type: String,
        //     required: [true, "Kid ID is required."]
        // },
        summary: {
            type: String,
            required: [true, "Summary is required."],
            minLength: [5, "Summary must be at least 5 characters."]
        },
        pledge: {
            type: String,
            required: [true, "Pledge is required."],
            minLength: [5, "Pledge must be at least 5 characters."]
        },
        reward: {
            type: String
        },
        rewardURL: {
            type: String
        },
        totalStars: {
            type: Number,
            required: [true, "Total stars is required."],
            min:[1, "Total stars must be at least 1."],
            max:[50, "Total stars must be less than 50."]
        },
        awardedStars: {
            type: Number,
            default: 0,
            min: [0, "Awarded stars must be positive."],
            max: [50, "Award stars must be less than 50."]
        }
        
    },
    {timestamps: true})
    
const KidSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
            minLength: [2, "Name must be at least 2 characters."]
        },
        imageURL: {
            type: String
        },
        goals: [GoalSchema]
    },
    {timestamps: true})

const Kid = mongoose.model('Kid', KidSchema)
const Goal = mongoose.model('Goal', GoalSchema)
    
module.exports = {Kid, Goal}