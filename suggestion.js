const mongoose = require('mongoose')

const SuggestionSchema = new mongoose.Schema({
    title :{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    author :{
        type: String,
        lowercase: true
    },
    suggestion :{
        type: String,
        lowercase: true,
        required: true
    },
    likes :{
        type: Number,
        default: 0
    },
    anonymous :{
        type: Boolean
    },
    timeCreated :{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Suggestion', SuggestionSchema)
