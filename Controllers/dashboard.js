const MyProjects = require("../Schemas/projects"),
Dashboard = require("../Schemas/dashboard");

exports.dashboardId = (req, res, next) => {
    console.log(req)
    Dashboard.findOne({ _id: req.params.id })
        .then(data => console.log(data))
        .catch(err => res.status(400).json({ err }))
}

exports.newProject = (req, res, next) => {
    const project = new MyProjects ({
        ...req.body,
        dashboardID: req.params.id
    })
    project.save()
        .then(project => {
            if(project) {
                Dashboard.updateOne({_id: req.params.id},
                    {$push: {myProjects: project}})
                    .then(data => res.status(200).json({ data}))
                    .catch(err => res.status(400).json({err}))
            } else
                res.status(400).json(err)
        })
        .catch(err => res.status(400).json({err}))
}


exports.updatemyproject = (req, res, next) => {
    MyProjects.updateOne({_id: req.params.id},
        {...req.body, dashboardID: req.params.id})
    .then(() => res.status(200).json({ message: "Votre projet à été modifié."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}

exports.updateDashboard = (req, res, next) => {
    console.log(req)
    Dashboard.updateOne({ _id: req.params.id },
        {$set: {...req.body, _id: req.params.id}})
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ err: "Une erreur est survenue."}))
}
// Delete
exports.deleteproject = (req, res, next) => {
    MyProjects.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: "Votre liste de projets à été modifiée."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}