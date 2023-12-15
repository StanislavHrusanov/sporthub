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


module.exports = router;