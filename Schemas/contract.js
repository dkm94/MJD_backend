const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contractSchema = new mongoose.Schema({
    name: [{
        type: String,
        enum: ["Contrat de professionnalisation", "Contrat d'apprentissage", "Stage"] 
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

module.exports = mongoose.model('Contract', contractSchema);