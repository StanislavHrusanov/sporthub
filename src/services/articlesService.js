const Article = require('../models/Article');

exports.addArticle = (article) => Article.create(article);

exports.getLatestArticles = () => Article.find().sort({ createdAt: -1 }).limit(13);

exports.getArticlesOfExactSport = (sport) => Article.find({ sport: sport }).sort({ createdAt: -1 }).populate('author');

exports.getArticlesOfExactLeague = (sport, league) => Article.find({ sport: sport, league: league }).sort({ createdAt: -1 }).populate('author');

exports.getOne = (articleId) => Article.findById(articleId).populate('author');

exports.getAll = () => Article.find().populate('author');