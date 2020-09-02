const User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard");

const bcrypt = require('bcrypt');

// Read Dashboard
exports.myaccount = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json({ err }))
}

exports.editAccount = (req, res, next) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    User.updateOne({_id: req.params.id},
        {password: hash})
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ error: "échec de l'opération"}))
}

exports.deleteAccount = (req, res, next) => {
    Dashboard.deleteOne({ userID: req.params.id })
        .then(data => {
                User.deleteOne({ _id: req.params.id })
                    .then(data => res.status(200).json({data}))
                    .catch(err => res.status(500).json({ error: "échec de l'opération"}))
        })
        .catch(err => res.status(400).json({ error: "Une erreur est survenue." }));
}