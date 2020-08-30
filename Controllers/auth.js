const User = require("../Schemas/user"),
Dashboard = require("../Schemas/dashboard"),
MyProfile = require("../Schemas/dashboard/myProfile"),
MySkills = require("../Schemas/dashboard/mySkills"),
MyProjects = require("../Schemas/dashboard/myProjects");

const dashboardRoutes = require("../Routes/dashboard");

const bcrypt = require('bcrypt'),
jwt = require('jsonwebtoken'),
jwt_secret = process.env.JWT_SECRET_KEY;


exports.register = (req, res, next) => {
    let hash = bcrypt.hashSync(req.body.password, 10);
    const user = new User ({
        // ...req.body
        email: req.body.email,
        password: hash
    });
    console.log(user)
    user.save()
        .then(user => {
            if(user) {
                const dashboard = new Dashboard ({
                    userID: user._id
                })
                console.log(dashboard)
                dashboard.save()
                    .then(dashboard => res.status(200).json(dashboard))
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
                        } else 
                            res.status(200).json({
                                userID: user._id,
                                token: jwt.sign(
                                    {userID: user._id},
                                    jwt_secret,
                                    { expiresIn: "24h"}
                                )
                            })
                    })
                    .catch(err => res.status(500).json({err}))
        })
        .catch(err => res.status(500).json({err}))
}