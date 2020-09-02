const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: 'Your email is required',
        unique: true
    },
    //hash
    password: {
        type: String,
        required: 'The password is required'
    },
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    }

});

module.exports = mongoose.model('User', userSchema);