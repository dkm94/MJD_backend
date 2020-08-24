const express = require('express');
const router = express.Router();

const User = require("../Schemas/user");

//Create new account
router.post('/', (req, res, next) => {
    const user = new User ({
        email: req.body.email,
        password: req.body.email
    });
    user.save()
        .then(() => req.status(200).json({ message: "Nouvel utilisateur créé avec succès."}))
        .catch(err => res.status(400).json({ message: "Echec de l'opération."}))
});

// Edit account 
router.put('/:id', (req, res, next) => {
  
    User.updateOne(
        {_id: req.params.id}, { password: req.body.password, _id: req.params.id})
        .then(() => res.status(200).json({ message: "Les modifications ont été prises en compte."}))
        .catch(err => res.status(400).json({ err }))
});

// Delete account
router.delete('/:id', (req, res, next) => {
  
    User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: "Votre compte a été supprimé."}))
        .catch(err => res.status(400).json({ err }))
});
        
module.exports = router;