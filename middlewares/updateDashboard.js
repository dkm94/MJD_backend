const Dashboard = require("../Schemas/dashboard");

module.exports = (req, res, next) => {
    Dashboard.updateOne({ _id: req.params.id},
        {...req.body, _id: req.params.userID})
    .then(() => res.status(200).json({ message: "Votre dashboard a été modifié."}))
    .catch(err => res.status(400).json ({ err }))
}