const express = require('express');
const { initializeDatabase } = require('./config/database');
const { PORT } = require('./config/env');
const cookieParser = require('cookie-parser');
const { auth } = require('./middlewares/authMiddleware');
const routes = require('./routes');

const app = express();

require('./config/handlebars')(app);

app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);

initializeDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`App is listening on port ${PORT}...`));
    })
    .catch((err) => {
        console.log(`App cannot connect to database`, err);
    });