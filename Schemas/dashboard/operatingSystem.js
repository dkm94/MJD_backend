const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let opsysSchema = new mongoose.Schema({
    operatingSystem: [{
        type: String,
        enum: ["windows", "linux", "mac"] 
    }],
    dashboardID: {
        type: Schema.Types.ObjectId, 
        ref: 'Dashboard'
    },
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model('Opsys', opsysSchema);