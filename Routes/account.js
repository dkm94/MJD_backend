const express = require('express');
const accountRoutes = express.Router();

const accountCtrl = require("../Controllers/account");

// accountRoutes.get('/', (req, res, next) => {
//     res.send("Hello world")
// })



//Create new account
accountRoutes.post('/new', accountCtrl.createAccount);

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