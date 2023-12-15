const router = require('express').Router();
const { SESSION_NAME } = require('../config/env');
const authService = require('../services/authService');
const validation = require('../utils/validation');
const { isLoggedIn, isGuest } = require('../middlewares/authMiddleware');

router.get('/register', isGuest, async (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    try {
        validation.validateUser(userData);

        const createdUser = await authService.register(userData);

        const token = await authService.createToken(createdUser);

        res.cookie(SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        res.render('auth/register', { userData, error });
    }
});

router.get('/login', isGuest, async (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {
    const userData = req.body;
    userData.username = userData.username.trim();
    userData.password = userData.password.trim();

    try {

        if (userData.username == '' || userData.password == '') {
            throw ('Невалидно потребителско име или парола!');
        }

        const token = await authService.login(userData);

        res.cookie(SESSION_NAME, token, { httpOnly: true });
        res.redirect('/');

    } catch (error) {
        res.render('auth/login', { userData, error });
    }
});

router.get('/logout', isLoggedIn, (req, res) => {
    res.clearCookie(SESSION_NAME);
    res.redirect('/');
});

module.exports = router;