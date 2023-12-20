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

module.exports = (app) => {
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}