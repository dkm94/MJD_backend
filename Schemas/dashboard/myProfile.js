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
        type: Number
    },
    time: {
        type: Number
    },
    // availability: {

    // }
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
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    }

});

module.exports = mongoose.model('myProfile', myProfileSchema);