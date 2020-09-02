const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let availabilitySchema = new mongoose.Schema({
    avb: {
        type: Boolean,
        default: false
    },
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    },
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model('Availability', availabilitySchema);