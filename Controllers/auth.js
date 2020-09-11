const User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard");

const bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;

exports.register = async (req, res, next) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
                const user = new User ({
                    email: req.body.email,
                    password: hash
                })
                const dashboard = new Dashboard ({
                    ...req.body,
                    userID: user._id
                })
                user.dashboardID = dashboard._id;
                user.save()
                dashboard.save()
                console.log("user:", user)
                var token = jwt.sign({ userId: user._id, dashboardId: user.dashboardID }, jwt_secret);
                res.status(200).json({auth: true, user, token: token, message: "Vous êtes connecté.e"})
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