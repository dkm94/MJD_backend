const User = require("../Schemas/user");

exports.createAccount = (req, res, next) => {
    delete req.body._id;
    const user = new User ({
        ...req.body
    });
    console.log(user)
    user.save()
        .then(() => res.status(201).json({ message: "Nouvel utilisateur créé avec succès."}))
        .catch(err => { 
            res.status(400).json(err);
            console.log(err)}
        )
};