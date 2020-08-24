const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myDashboardSchema = new mongoose.Schema({

    myProfile: {
        type: Schema.Types.ObjectId, 
        ref: 'myProfile'
    },
    mySkills: {
        type: Schema.Types.ObjectId, 
        ref: 'mySkills'
    },
    myProjects: [{
        type: Schema.Types.ObjectId, 
        ref: 'myProjects'
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    }

});

module.exports = mongoose.model('myDashboard', myDashboardSchema);