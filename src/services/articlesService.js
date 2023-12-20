const Article = require('../models/Article');

exports.addArticle = (article) => Article.create(article);

exports.getLatestArticles = () => Article.find().sort({ createdAt: -1 }).limit(13);