const Article = require('../models/Article');

exports.addArticle = (article) => Article.create(article);

exports.getLatestArticles = () => Article.find().sort({ createdAt: -1 }).limit(13);

exports.getArticlesOfExactSport = (sport) => Article.find({ sport: sport }).sort({ createdAt: -1 }).populate('author');

exports.getArticlesOfExactLeague = (sport, league) => Article.find({ sport: sport, league: league }).sort({ createdAt: -1 }).populate('author');

exports.getOne = (articleId) => Article.findById(articleId).populate('author');

exports.addView = async (articleId) => {
    const article = await this.getOne(articleId);
    if (!article) {
        throw ('Not Found!')
    }
    article.views += 1;
    await article.save();
}

exports.getAll = () => Article.find().populate('author');

exports.getSimilarNews = (article) => {
    if (article.sport == 'ФУТБОЛ СВЯТ') {
        return Article.find({ sport: article.sport, league: article.league, _id: { $nin: [article._id] } }).sort({ createdAt: -1 }).limit(5);
    }
    return Article.find({ sport: article.sport, _id: { $nin: [article._id] } }).sort({ createdAt: -1 }).limit(5);
}