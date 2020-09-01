const MyProfile = require("../Schemas/dashboard/myProfile"),
MySkills = require("../Schemas/dashboard/mySkills"),
MyProjects = require("../Schemas/dashboard/myProjects"),
Dashboard = require("../Schemas/dashboard");


// Read
// exports.myprofile = (req, res, next) => {
//     MyProfile.findOne({ dashboardID: req.params.id })
//         .then(profile => res.status(200).json(profile))
//         .catch(err => res.status(400).json ({ err }))
// }

// exports.myskills = (req, res, next) => {
//     MySkills.findOne({dashboardID: req.params.id})
//         .then(skills => res.status(200).json(skills))
//         .catch(err => res.status(400).json ({ err }))
// }

// exports.myprojects = (req, res, next) => {
//     MyProjects.findOne({dashboardID: req.params.id})
//         .then(projects => res.status(200).json(projects))
//         .catch(err => res.status(400).json ({ err }))
// }

exports.dashboard = (req, res, next) => {
    Dashboard.findOne({ userID: req.params.id })
        .then(dashboard => res.status(200).json({dashboard}))
        .catch(err => res.status(400).json({err}))
}

// Create
// exports.createMyProfile = (req, res, next) => {
//     const myprofile = new MyProfile ({
//         ...req.body,
//         dashboardID: req.params.id
//     })
//     myprofile.save()
//         .then(myprofile => {
//             if(myprofile) {
//                 Dashboard.updateOne({_id: req.params.id},
//                     {$push: {myProfile: myprofile}})
//                     .then(data => res.status(200).json({ data}))
//                     .catch(err => res.status(400).json({err}))
//             }
//         })
//         .catch(err => res.status(400).json({ err }))
// }

// exports.createMySkills = (req, res, next) => {
//     const myskills = new MySkills ({
//         ...req.body,
//         dashboardID: req.params.id
//     })
//     myskills.save()
//         .then(myskills => {
//             if(myskills) {
//                 Dashboard.updateOne({_id: req.params.id},
//                     {$push: {mySkills: myskills}})
//                     .then(data => res.status(200).json({ data}))
//                     .catch(err => res.status(400).json({err}))
//             }
//         })
//         .catch(err => res.status(400).json({err}))
// }

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

// Update
// exports.updatemyprofile = (req, res, next) => {
//     MyProfile.updateOne({ dashboardID: req.params.id},
//         {...req.body, dashboardID: req.params.id})
//     .then(() => {
//         if(res.statusCode !== 200) {
//             res.send("Erreur update MyProfile.")
//         } else 
//             Dashboard.updateOne({ dashboardID: req.params.id },
//                 {...req.body, dashboardID: req.params.id})
//                 .then(data => res.status(200).json({data}))
//                 .catch(err => res.status(400).json({err}))
//     })
//     .catch(err => res.status(400).json ({ err }))
// }

// exports.updatemyskills = (req, res, next) => {
//     MySkills.updateOne({ dashboardID: req.params.id},
//         {...req.body, dashboardID: req.params.id})
//     .then(() => res.status(200).json({ message: "Votre liste de connaissances a été modifiée."}))
//     .catch(err => res.status(400).json ({ err }))
//     next();
// }

exports.updatemyproject = (req, res, next) => {
    MyProjects.updateOne({_id: req.params.id},
        {...req.body, dashboardID: req.params.id})
    .then(() => res.status(200).json({ message: "Votre projet à été modifié."}))
    .catch(err => res.status(400).json ({ err }))
    next();
}

exports.updateDashboard = (req, res, next) => {
    Dashboard.updateOne({ userID: req.params.id },
        {$set: {...req.body, userID: req.params.id}})
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