const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let myProjects = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    media: {
        type: String
    }

});

module.exports = mongoose.model('myProjects', myProjects);