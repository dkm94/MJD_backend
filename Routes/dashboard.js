const express = require('express');
const dashboardRoutes = express.Router();

const dashboardCtrl = require("../Controllers/dashboard");
const updateDashboard = require("../middlewares/updateDashboard");

const verification = require("../middlewares/auth");

dashboardRoutes.get('/myProfile/:id', verification, dashboardCtrl.myprofile);
dashboardRoutes.get('/mySkills/:id', verification, dashboardCtrl.myskills);
dashboardRoutes.get('/myProjects/:id', verification, dashboardCtrl.myprojects);

dashboardRoutes.post('/createProfile/:id', verification, dashboardCtrl.createMyProfile);
dashboardRoutes.post('/createSkills/:id', verification, dashboardCtrl.createMySkills);
dashboardRoutes.post('/newProject/:id', verification, dashboardCtrl.newProject);

dashboardRoutes.put('/updateProfile/:id', verification, dashboardCtrl.updatemyprofile);
dashboardRoutes.put('/updateSkills/:id', verification, dashboardCtrl.updatemyskills, updateDashboard);
dashboardRoutes.put('/updateProject/:id', verification, dashboardCtrl.updatemyproject, updateDashboard);

dashboardRoutes.delete('/deleteProject/id', verification, dashboardCtrl.deleteproject, updateDashboard);

module.exports = dashboardRoutes;