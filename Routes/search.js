const express = require('express');
const searchRoutes = express.Router();

const searchCtrl = require("../Controllers/search");

const verification = require("../middlewares/auth");

searchRoutes.get('/results', searchCtrl.searchReasults);

module.exports = searchRoutes;