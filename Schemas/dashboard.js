const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myDashboardSchema = new mongoose.Schema({

    name: String,
    bio: String,
    job: String,
    contract: [{
            type: String,
            enum: ["Contrat de professionnalisation", "Contrat d\'apprentissage", "Stage" ]
    }],
    time: Number,
    availability: {
        type: Boolean
    },
    mobility: [{
        type: String
    }],
    avatar: String,
    banner: String,
    resume: String,
    operatingSystem: [{
        type: String,
        enum: ['Windows', 'Linux', 'Mac']
    }],
    keywords: [{
        type: String
    }],
    myprojectsID: [{
        type: Schema.Types.ObjectId, 
        ref: 'MyProjects'
    }],
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Dashboard', myDashboardSchema);