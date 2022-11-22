const mongoose = require('mongoose')
    
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

const Kid = mongoose.model('Kid', KidSchema)
    
module.exports = {Kid}