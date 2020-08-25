const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myProfileSchema = new mongoose.Schema({

    name: {
        type: String,
        required: 'Your name is required'
    },
    job: {
        type: String,
        required: 'Please fill in the position'
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
    }

});

module.exports = mongoose.model('MyProfile', myProfileSchema);