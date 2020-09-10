const express = require('express');
const dashboardRoutes = express.Router();

const dashboardCtrl = require("../Controllers/dashboard");

const verification = require("../middlewares/auth");

dashboardRoutes.get('/:id', verification, dashboardCtrl.dashboardId);

dashboardRoutes.post('/newProject/:id', verification, dashboardCtrl.newProject);

dashboardRoutes.put('/updateDashboard/:id', verification, dashboardCtrl.updateDashboard);
dashboardRoutes.put('/updateProject/:id', verification, dashboardCtrl.updatemyproject);

dashboardRoutes.delete('/deleteProject/id', verification, dashboardCtrl.deleteproject);

module.exports = dashboardRoutes;