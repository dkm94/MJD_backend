const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: 'Your email is required',
        unique: true
    },
    password: {
        type: String,
        required: 'The password is required'
    },
    mydashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'MyDashboard'
    }

});

module.exports = mongoose.model('User', userSchema);