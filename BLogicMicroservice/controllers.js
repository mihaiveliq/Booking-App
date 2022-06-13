const Router = require('express').Router();

const ChairsController = require('./chairs/chairControllers.js');
const SpectaclesController = require('./spectacles/spectacleControllers.js');

Router.use('/chairs', ChairsController);
Router.use('/spectacles', SpectaclesController);

module.exports = Router;