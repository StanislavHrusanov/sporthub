const routes = require('express').Router();
const homeController = require('./controllers/homeController');

routes.use('/', homeController);

module.exports = routes;