const hbs = require('express-handlebars');

const hbars = hbs.create({});
hbars.handlebars.registerHelper('homePageDate', function () {
    const todayDate = new Date();
    const days = {
        Mon: 'Понеделник',
        Tue: 'Вторник',
        Wed: 'Сряда',
        Thu: 'Четвъртък',
        Fri: 'Петък',
        Sat: 'Събота',
        Sun: 'Неделя'
    };

    const months = {
        Jan: 'Януари',
        Feb: 'Февруари',
        Mar: 'Март',
        Apr: 'Април',
        May: 'Май',
        Jun: 'Юни',
        Jul: 'Юли',
        Aug: 'Август',
        Sep: 'Септември',
        Oct: 'Октомври',
        Nov: 'Ноември',
        Dec: 'Декември'
    };

    const [day, month, date, year] = todayDate.toDateString().split(' ');

    return `${days[day]}, ${months[month]} ${date}, ${year}`;
});

hbars.handlebars.registerHelper('articleDate', function (createdAt) {
    const dateOfCreation = new Date(createdAt);

    const months = {
        Jan: 'Яну',
        Feb: 'Фев',
        Mar: 'Мар',
        Apr: 'Апр',
        May: 'Май',
        Jun: 'Юни',
        Jul: 'Юли',
        Aug: 'Авг',
        Sep: 'Сеп',
        Oct: 'Окт',
        Nov: 'Ное',
        Dec: 'Дек'
    };

    const [day, month, date, year] = dateOfCreation.toDateString().split(' ');

    return `${months[month]} ${date}, ${year}`;
});

hbars.handlebars.registerHelper('prevPage', function (req) {
    let url = req.originalUrl;

    let [origUrl, cPage] = url.split('page=');
    let currPage = Number(cPage);

    return origUrl += `page=${currPage - 1}`;

});

hbars.handlebars.registerHelper('nextPage', function (req) {
    let url = req.originalUrl;
    if (!url.includes('?page=')) {
        return url += '?page=2';
    } else {
        let [origUrl, cPage] = url.split('page=');
        let currPage = Number(cPage);

        return origUrl += `page=${currPage + 1}`;
    }
});

hbars.handlebars.registerHelper('getCurrPage', function (req) {
    let url = req.originalUrl;
    if (!url.includes('page=')) {
        return '1';
    } else {
        let [origUrl, cPage] = url.split('page=');

        return cPage;
    }
});

hbars.handlebars.registerHelper('prevPagePlusSearch', function (req) {
    let url = req.originalUrl;

    let [origUrl, cPage] = url.split('&page=');
    let currPage = Number(cPage);

    return origUrl += `&page=${currPage - 1}`;

});

hbars.handlebars.registerHelper('nextPagePlusSearch', function (req) {
    let url = req.originalUrl;
    if (!url.includes('&page=')) {
        return url += '&page=2';
    } else {
        let [origUrl, cPage] = url.split('&page=');
        let currPage = Number(cPage);

        return origUrl += `&page=${currPage + 1}`;
    }
});

module.exports = (app) => {
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}