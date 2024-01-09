exports.isAdmin = async (req, res, next) => {

    if (!req.user?.isAdmin) {
        return res.redirect('/404');
    }
    next();
}