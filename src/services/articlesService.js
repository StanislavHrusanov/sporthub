const Article = require('../models/Article');

exports.addArticle = (article) => Article.create(article);

exports.getLatestArticles = () => Article.find().sort({ createdAt: -1 }).limit(13);

exports.getArticlesOfExactSport = (sport, page, limit) => Article.find({ sport: sport }).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit).populate('author');

exports.getArticlesOfExactLeague = (sport, league, page, limit) => Article.find({ sport: sport, league: league }).sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit).populate('author');

exports.getOne = (articleId) => Article.findById(articleId).populate('author');

exports.addView = async (articleId) => {
    const article = await this.getOne(articleId);
    if (!article) {
        throw ('Not Found!')
    }
    article.views += 1;
    await article.save();
}

exports.getAll = (page, limit) => Article.find().sort({ createdAt: -1 }).limit(limit * 1).skip((page - 1) * limit).populate('author');

exports.getSimilarNews = (article) => {
    if (article.sport == 'ФУТБОЛ СВЯТ') {
        return Article.find({ sport: article.sport, league: article.league, _id: { $nin: [article._id] } }).sort({ createdAt: -1 }).limit(5);
    }
    return Article.find({ sport: article.sport, _id: { $nin: [article._id] } }).sort({ createdAt: -1 }).limit(5);
}

exports.getArticlesCount = () => Article.countDocuments({});

exports.getArticlesCountOfExactSport = (sport) => Article.countDocuments({ sport: sport });

exports.getArticlesCountOfExactLeague = (sport, league) => Article.countDocuments({ sport: sport, league: league });

exports.edit = (articleId, article) => {
    if (article.sport != 'ФУТБОЛ СВЯТ') {
        return Article.findOneAndUpdate(
            { _id: articleId },
            { $unset: { league: "" }, sport: article.sport, imageUrl: article.imageUrl, title: article.title, text: article.text }
        );
    }
    return Article.findByIdAndUpdate(articleId, article);
}

exports.delete = (articleId) => Article.findByIdAndDelete(articleId);

exports.search = (searched, page, limit) => Article
    .find({ "title": { $regex: searched, $options: "i" } })
    .sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .populate('author');

exports.getSearchedArticlesCount = (searched) => Article.countDocuments({ "title": { $regex: searched, $options: "i" } });