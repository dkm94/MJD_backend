const express = require('express');
const publicRoutes = express.Router();

const dashboardCtrl = require("../Controllers/dashboard");

publicRoutes.get('/profile/:id', dashboardCtrl.dashboardId);

module.exports = publicRoutes;