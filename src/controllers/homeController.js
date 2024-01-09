const router = require('express').Router();
const articlesService = require('../services/articlesService');

router.get('/', async (req, res) => {
    try {
        const latestArticles = await articlesService.getLatestArticles().lean();
        const firstFour = latestArticles.slice(0, 4);
        const fifthAndSixth = latestArticles.slice(4, 6);
        const seventhAndEighth = latestArticles.slice(6, 8);
        const nineth = latestArticles.slice(8, 9);
        const tenthAndEleventh = latestArticles.slice(9, 11);
        const twelfthAndThirteenth = latestArticles.slice(11, 13);
        res.render('home/home', { firstFour, fifthAndSixth, seventhAndEighth, nineth, tenthAndEleventh, twelfthAndThirteenth });
    } catch (error) {
        res.redirect('/404');
    }

});

router.get('/404', async (req, res) => {
    res.render('home/404');
});

module.exports = router;