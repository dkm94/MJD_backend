const User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard");

const bcrypt = require('bcrypt');
const dashboardRoutes = require("../Routes/dashboard");

// Read Dashboard
exports.myaccount = (req, res, next) => {
    Dashboard.findOne({ userID: req.params.id })
        .populate('MyProfile')
        .populate('MySkills')
        .populate('MyProjects')
        .exec()
        .then(dashboard => res.status(200).json(dashboard))
        .catch(err => res.status(400).json ({ err }))
}

exports.editAccount = (req, res, next) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    User.updateOne({_id: req.params.userID},
        {$set: {password: hash}})
        .then(() => res.status(200).json({ message: "Modifications enregistrées."}))
        .catch(err => res.status(500).json({ error: "échec de l'opération"}))
}

// exports.deleteDashboard = (req, res, next) => {
//     MyDashboard.deleteOne({_id: req.params.userID})
//         .then(() => res.status(200).json({ message: 'Les données du dahsboard ont été supprimées avec succès.'}))
//         .catch(err => res.status(400).json({ error: "Une erreur est survenue." }));
//         next();
// }

exports.deleteAccount = (req, res, next) => {
    Dashboard.deleteOne({ userID: req.params.id })
        .then(data => {
            if(res.status() == 200) {
                User.deleteOne({ _id: req.params.id })
                    .then(data => res.status(200).json({data}))
                    .catch(err => res.status(500).json({ error: "échec de l'opération"}))
            } else
                res.status(400).json({ error: "Une erreur est survenue." })
        })
        .catch(err => res.status(400).json({ error: "Une erreur est survenue." }));
}