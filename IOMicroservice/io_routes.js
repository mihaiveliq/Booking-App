const Router = require('express').Router();

const ChairController = require('./chair/controllers.js');
const SpectalesController = require ('./spectacle/controllers.js');

Router.use('/chairs', ChairController);
Router.use('/spectacles', SpectalesController);

module.exports = Router;
