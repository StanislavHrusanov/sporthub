const router = require('express').Router();
const { isAdmin } = require('../middlewares/routGuards');
const articlesService = require('../services/articlesService');
const validation = require('../utils/validation');

router.get('/addArticle', isAdmin, (req, res) => {
    res.render('articles/add');
});

router.post('/addArticle', isAdmin, async (req, res) => {
    const article = req.body;

    const articleCopy = JSON.parse(JSON.stringify(article));

    try {
        validation.validateArticle(article);
        article.author = req.user._id;
        const splitedText = article.text.split('\n');
        const text = [];
        splitedText.forEach(p => text.push({ paragraph: p }));
        article.text = text;
        await articlesService.addArticle(article);
        res.redirect('/articles/news');

    } catch (error) {
        const notSplitedText = articleCopy.text;
        res.render('articles/add', { article, notSplitedText, error });
    }
});

router.get('/news', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getAll(page, limit).lean();
        const count = await articlesService.getArticlesCount();
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;

        res.render('articles/allNews', { articles, pages, req, isFirst, isLast });
    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/bgFootball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('БГ ФУТБОЛ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('БГ ФУТБОЛ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ФУТБОЛ СВЯТ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ФУТБОЛ СВЯТ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/worldFootball', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/England', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Англия', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Англия');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/Spain', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Испания', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Испания');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/Italy', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Италия', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Италия');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/Germany', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Германия', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Германия');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/France', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Франция', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Франция');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/ChampionsLeague', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'ШЛ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'ШЛ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/EuropaLeague', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Лига Европа', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Лига Европа');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/EuropaConferenceLeague', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Лига на конференциите', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Лига на конференциите');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/NationalTeams', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Национални отбори', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Национални отбори');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/worldFootball/OtherLeagues', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Други', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactLeague('ФУТБОЛ СВЯТ', 'Други');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/basketball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('БАСКЕТБОЛ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('БАСКЕТБОЛ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/volleyball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ВОЛЕЙБОЛ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ВОЛЕЙБОЛ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/tennis', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ТЕНИС', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ТЕНИС');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/athletics', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ЛЕКА АТЛЕТИКА', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ЛЕКА АТЛЕТИКА');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/motorSports', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('МОТОРНИ СПОРТОВЕ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('МОТОРНИ СПОРТОВЕ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/combatSports', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('БОЙНИ СПОРТОВЕ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('БОЙНИ СПОРТОВЕ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/otherSports/others', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ДРУГИ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ДРУГИ');
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/:articleId/details', async (req, res) => {
    const articleId = req.params.articleId;

    try {
        await articlesService.addView(articleId);
        const article = await articlesService.getOne(articleId).lean();
        const similarNews = await articlesService.getSimilarNews(article).lean();

        res.render('articles/details', { article, similarNews });
    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/:articleId/edit', isAdmin, async (req, res) => {
    const articleId = req.params.articleId;

    try {
        const article = await articlesService.getOne(articleId).lean();
        const text = [];
        article.text.forEach(p => text.push(p.paragraph));
        const notSplitedText = text.join('\n');

        res.render('articles/edit', { article, notSplitedText });
    } catch (error) {
        res.redirect('/404');
    }
});

router.post('/:articleId/edit', isAdmin, async (req, res) => {
    const articleId = req.params.articleId;
    const article = req.body;

    const articleCopy = JSON.parse(JSON.stringify(article));

    try {
        validation.validateArticle(article);
        const splitedText = article.text.split('\n');
        const text = [];
        splitedText.forEach(p => text.push({ paragraph: p }));
        article.text = text;

        await articlesService.edit(articleId, article);
        res.redirect(`/articles/${articleId}/details`);
    } catch (error) {
        const notSplitedText = articleCopy.text;
        res.render('articles/edit', { article, notSplitedText, error });
    }
});

router.get('/:articleId/delete', isAdmin, async (req, res) => {
    const articleId = req.params.articleId;

    try {
        await articlesService.delete(articleId);
        res.redirect('/');
    } catch (error) {
        res.redirect('/404');
    }
});

router.get('/search?', async (req, res) => {
    let searched = req.query.searched;
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    if (searched.match(/^\s*$/gm)) {
        return res.redirect('/articles/news');
    }
    try {
        const articles = await articlesService.search(searched, page, limit).lean();
        const count = await articlesService.getSearchedArticlesCount(searched);
        const pages = Math.ceil(count / limit) || 1;
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/search', { articles, pages, req, isFirst, isLast, searched, count });
    } catch (error) {
        res.redirect('/404');
    }
});

module.exports = router;