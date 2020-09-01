const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myDashboardSchema = new mongoose.Schema({

    name: String,
    job: String,
    contract: {
        type: String,
        enum: ["Contrat de professionnalisation", "Contrat d'apprentissage", "Stage"]
    },
    time: Number,
    availability: {
        type: Number,
        enum: [1, 2]
    },
    // mobility: [{type: String}],
    avatar: String,
    banner: String,
    resume: String,
    operatingSystem: String,
    keywords: String,
    myprojects: [{
        title: String,
        description: String,
        media: String
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('MyDashboard', myDashboardSchema);