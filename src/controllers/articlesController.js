const router = require('express').Router();
const { isLoggedIn } = require('../middlewares/authMiddleware');
const articlesService = require('../services/articlesService');

router.get('/addArticle', isLoggedIn, (req, res) => {
    res.render('articles/add');
});

router.post('/addArticle', isLoggedIn, async (req, res) => {
    const article = req.body;

    try {
        // article.views = 0;
        article.author = req.user._id;
        await articlesService.addArticle(article);
        res.redirect('/');

    } catch (error) {
        res.render('articles/add', { article, error });
    }
});

router.get('/news', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getAll(page, limit).lean();
        const count = await articlesService.getArticlesCount();
        const pages = Math.ceil(count / limit);
        let isLast = page >= pages;
        let isFirst = page == 1;

        res.render('articles/allNews', { articles, pages, req, isFirst, isLast });
    } catch (error) {
        res.send(error);
    }
});

router.get('/bgFootball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('БГ ФУТБОЛ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('БГ ФУТБОЛ');
        const pages = Math.ceil(count / limit);
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/category', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball', async (req, res) => {
    let page = req.query.page ? Number(req.query.page) : 1;
    let limit = 12;

    try {
        const articles = await articlesService.getArticlesOfExactSport('ФУТБОЛ СВЯТ', page, limit).lean();
        const count = await articlesService.getArticlesCountOfExactSport('ФУТБОЛ СВЯТ');
        const pages = Math.ceil(count / limit);
        let isLast = page >= pages;
        let isFirst = page == 1;
        res.render('articles/worldFootball', { articles, pages, req, isFirst, isLast });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/England', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Англия').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/Spain', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Испания').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/Italy', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Италия').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/Germany', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Германия').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/France', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Франция').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/ChampionsLeague', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'ШЛ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/EuropaLeague', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Лига Европа').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/EuropaConferenceLeague', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Лига на конференциите').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/NationalTeams', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Национални отбори').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/worldFootball/OtherLeagues', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactLeague('ФУТБОЛ СВЯТ', 'Други').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/basketball', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('БАСКЕТБОЛ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/volleyball', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('ВОЛЕЙБОЛ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/tennis', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('ТЕНИС').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/athletics', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('ЛЕКА АТЛЕТИКА').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/motorSports', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('МОТОРНИ СПОРТОВЕ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/combatSports', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('БОЙНИ СПОРТОВЕ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
    }
});

router.get('/otherSports/others', async (req, res) => {
    try {
        const articles = await articlesService.getArticlesOfExactSport('ДРУГИ').lean();
        res.render('articles/category', { articles });

    } catch (error) {
        res.send(error);
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
        res.send(error);
    }
});

module.exports = router;