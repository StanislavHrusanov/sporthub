const router = require('express').Router();
const articlesService = require('../services/articlesService');

router.get('/', async (req, res) => {
    try {
        const mostViewedFootballArticles = await articlesService.getMostViewedFootballArticles(['БГ ФУТБОЛ', 'ФУТБОЛ СВЯТ']).lean();
        const latestArticles = await articlesService.getLatestArticles().lean();
        const breakingNews = await articlesService.getMostViewedArticlesExcludingFootball(['БГ ФУТБОЛ', 'ФУТБОЛ СВЯТ']).lean();

        const firstThreeOfMostViewed = mostViewedFootballArticles.slice(0, 3);
        const fromFourthToSeventhOfMostViewed = mostViewedFootballArticles.slice(3, 7);
        const fromEighthToTwelfthOfMostViewed = mostViewedFootballArticles.slice(7, 12);

        const firstFour = latestArticles.slice(0, 4);
        const fifthAndSixth = latestArticles.slice(4, 6);
        const seventhAndEighth = latestArticles.slice(6, 8);
        const nineth = latestArticles.slice(8, 9);
        const tenthAndEleventh = latestArticles.slice(9, 11);
        const twelfthAndThirteenth = latestArticles.slice(11, 13);
        res.render('home/home', {
            firstThreeOfMostViewed,
            fromFourthToSeventhOfMostViewed,
            fromEighthToTwelfthOfMostViewed,
            breakingNews,
            firstFour,
            fifthAndSixth,
            seventhAndEighth,
            nineth,
            tenthAndEleventh,
            twelfthAndThirteenth,
        });
    } catch (error) {
        res.redirect('/404');
    }

});

router.get('/404', async (req, res) => {
    res.render('home/404');
});

router.get('/termsAndConditions', async (req, res) => {
    res.render('home/termsAndConditions');
});

router.get('/privicyPolicy', async (req, res) => {
    res.render('home/privicyPolicy');
});

router.get('/cookiesPolicy', async (req, res) => {
    res.render('home/cookies');
});

module.exports = router;