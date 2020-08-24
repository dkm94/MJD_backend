const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mySkillsSchema = new mongoose.Schema({

    operatingSystem: [{
        type: Number
    }],
    tools: [{
        type: String
    }],
    keywords: [{
        type: String
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    }

});

module.exports = mongoose.model('mySkills', mySkillsSchema);