const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const createError = require('http-errors');

require('express-async-errors');
require('log-timestamp');

const io_routes = require('./io_routes.js');

const app = express();

app.use(helmet());
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', io_routes);

app.use((err, req, res, next) => {
    console.error(err);
    let status = 500;
    let message = 'Something Bad Happened';
    return next(createError(status, message));
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});