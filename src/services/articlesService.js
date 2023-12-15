const Article = require('../models/Article');

exports.addArticle = (article) => Article.create(article);