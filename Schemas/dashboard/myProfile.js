const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myProfileSchema = new mongoose.Schema({

    name: {
        type: String
    },
    job: {
        type: String
    },
    contract: {
        type: String
    },
    time: {
        type: Number
    },
    availability: {
        value1: {
            type: String
        },
        value2: {
            type: Date
        }

    },
    mobility: [{
        type: String
    }],
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
    resume: {
        type: String
    },
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    }

});

module.exports = mongoose.model('MyProfile', myProfileSchema);