const routes = require('express').Router();
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const articlesController = require('./controllers/articlesController');

routes.use('/', homeController);
routes.use('/auth', authController);
routes.use('/articles', articlesController);

module.exports = routes;