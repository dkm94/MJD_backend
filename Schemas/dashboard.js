const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myDashboardSchema = new mongoose.Schema({

    myProfile: {
        type: Schema.Types.ObjectId, 
        ref: 'MyProfile'
    },
    mySkills: {
        type: Schema.Types.ObjectId, 
        ref: 'MySkills'
    },
    myProjects: [{
        type: Schema.Types.ObjectId, 
        ref: 'MyProjects'
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('MyDashboard', myDashboardSchema);