const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mobilitySchema = new mongoose.Schema({
    area: [{
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

module.exports = mongoose.model('Mobility', mobilitySchema);