const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let keywordsSchema = new mongoose.Schema({
    keywords: [{
        type: String
    }],
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    },
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model('Keywords', keywordsSchema);