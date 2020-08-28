const User = require("../Schemas/user");
const bcrypt = require('bcrypt');

exports.editAccount = (req, res, next) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    User.updateOne({id: req.params.id},
        {$set: {password: hash}})
        .then(() => res.status(200).json({ message: "Modifications enregistrées."}))
        .catch(err => res.status(500).json({ error: "échec de l'opération"}))
}