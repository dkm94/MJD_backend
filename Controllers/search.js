const User = require("../Schemas/user");

exports.searchReasults = (req, res, next) => {
    User.find({})
        .then(users => {
            if(users == 0){
                res.status(404).json({ message: "Aucun résultat ne correspond à votre requête."})
            } else 
                res.status(200).json(users)
        })
        .catch(err => res.status(500).json({ err }))
}