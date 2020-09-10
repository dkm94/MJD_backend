const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    media: String,
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'MyDashboard'
    },
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model('MyProjects', projectSchema);