const express = require('express');
const accountRoutes = express.Router();

const authCtrl = require("../Controllers/auth");
const accountCtrl = require("../Controllers/account");

const verification = require("../middlewares/auth");


// Afficher compte
accountRoutes.get('/myaccount/:id', accountCtrl.myaccount)

//Authentification
accountRoutes.post('/register', authCtrl.register);
accountRoutes.post('/login', authCtrl.login);
accountRoutes.put('/edit/:id', verification, accountCtrl.editAccount);
accountRoutes.delete('/delete/:id', verification, accountCtrl.deleteAccount);

        
module.exports = accountRoutes;