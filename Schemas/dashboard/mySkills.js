const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mySkillsSchema = new mongoose.Schema({

    operatingSystem: [{
        type: String
    }],
    keywords: [{
        type: String
    }],
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    }

});

module.exports = mongoose.model('mySkills', mySkillsSchema);