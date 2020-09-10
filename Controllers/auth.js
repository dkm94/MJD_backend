const User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard");

const bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;


exports.register = (req, res, next) => {
    const dashboard = new Dashboard ({
        ...req.body
    });
    console.log(dashboard)
    dashboard.save()
        .then(dashboard => {
            if(dashboard) {
                let hash = bcrypt.hashSync(req.body.password, 10);
                const user = new User ({
                    email: req.body.email,
                    password: hash,
                    dashboardID: dashboard._id
                })
                user.save()
                    .then(user => res.status(200).json(user))
                    .catch(err => res.status(400).json({ err: "Erreur création dashboard." }))
            } else 
                res.status(400).json({ err: "Erreur création compte."})
        })
        .catch(err => { 
            res.status(400).json({err: "Erreur création compte."});
        })
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "Utilisateur non trouvé. Merci de vérifier votre adresse mail." })
            } else
                bcrypt.compare(req.body.password, user.password)
                    .then(match => {
                        if (!match) {
                            return res.status(401).json({ error: "Mot de passe invalide."})
                        } else {
                            var token = jwt.sign({ userId: user._id, dashboardId: user.dashboardID }, jwt_secret);
                            res.status(200).json({auth: true, token: token, message: "Vous êtes connecté.e."})
                        }
                            
                    })
                    .catch(err => res.status(500).json({err}))
        })
        .catch(err => res.status(500).json({err}))
}