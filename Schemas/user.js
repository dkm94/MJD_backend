const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({

    email: {
        type: 'string',
        required: 'Your email is required',
        unique: true
    },
    password: {
        type: 'string',
        required: 'The password is required'
    },
    mydashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'myDashboard'
    }

});

module.exports = mongoose.model('user', userSchema);