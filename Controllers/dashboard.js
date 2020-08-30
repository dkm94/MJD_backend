const MyProfile = require("../Schemas/dashboard/myProfile"),
MySkills = require("../Schemas/dashboard/mySkills"),
MyProjects = require("../Schemas/dashboard/myProjects"),
User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard");


// Read
exports.myprofile = (req, res, next) => {
    Dashboard.findOne({ userID: req.params.id })
        .then(profile => res.status(200).json(profile))
        .catch(err => res.status(400).json ({ err }))
}

exports.myskills = (req, res, next) => {
    MySkills.find({})
        .then(skills => res.status(200).json(skills))
        .catch(err => res.status(400).json ({ err }))
}

exports.myprojects = (req, res, next) => {
    MyProjects.find({})
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(400).json ({ err }))
}

exports.myprojects = (req, res, next) => {
    MyProjects.findOne({ _id: req.params.id})
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(400).json ({ err }))
}

// Update
exports.updatemyprofile = (req, res, next) => {
    MyProfile.updateOne({_id: req.params.id},
        {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre profil a été modifié."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}

exports.updatemyskills = (req, res, next) => {
    MySkills.updateOne({_id: req.params.id},
        {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre liste de connaissances a été modifiée."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}

exports.updatemyproject = (req, res, next) => {
    MyProjects.updateOne({_id: req.params.id},
        {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre projet à été modifié."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}

// Delete
exports.deleteproject = (req, res, next) => {
    MyProjects.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre liste de projets à été modifiée."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}