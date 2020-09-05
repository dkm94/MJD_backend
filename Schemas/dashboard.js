const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myDashboardSchema = new mongoose.Schema({

    name: String,
    bio: String,
    job: String,
    contractID: [{
            type: Schema.Types.ObjectId, 
            ref: 'Contract'
    }],
    time: Number,
    availabilityID: {
        type: Schema.Types.ObjectId, 
        ref: 'Availability'
    },
    mobilityID: [{
        type: Schema.Types.ObjectId, 
        ref: 'Mobility'
    }],
    avatar: String,
    banner: String,
    resume: String,
    operatingSystemID: [{
        type: Schema.Types.ObjectId, 
        ref: 'Opsys'
    }],
    keywordsID: [{
        type: Schema.Types.ObjectId, 
        ref: 'Keywords'
    }],
    myprojectsID: [{
        type: Schema.Types.ObjectId, 
        ref: 'Myprojects'
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('MyDashboard', myDashboardSchema);