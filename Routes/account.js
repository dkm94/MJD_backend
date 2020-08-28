const express = require('express');
const accountRoutes = express.Router();

const authCtrl = require("../Controllers/auth");
const accountCtrl = require("../Controllers/account");

const verification = require("../middlewares/auth");



//Authentification
accountRoutes.post('/register', authCtrl.register);
accountRoutes.post('/login', authCtrl.login);
accountRoutes.put('/edit', verification, accountCtrl.editAccount);

// Edit account 
accountRoutes.put('/:id', (req, res, next) => {
  
    User.updateOne(
        {_id: req.params.id}, { password: req.body.password, _id: req.params.id})
        .then(() => res.status(200).json({ message: "Les modifications ont été prises en compte."}))
        .catch(err => res.status(400).json({ err }))
});

// Delete account
accountRoutes.delete('/:id', (req, res, next) => {
  
    User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({ message: "Votre compte a été supprimé."}))
        .catch(err => res.status(400).json({ err }))
});

accountRoutes.get('/', (req, res, next) => {
    User.find()
        .then(() => res.status(200).json(users))
        .catch(err => res.status(400).json({ err }))
})
        
module.exports = accountRoutes;