// const homeRouter = require('./HomePage');
const WordsRouter = require('./Words')

function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    // app.use('/courses', coursesRouter);
    app.use('/words', WordsRouter);
    // app.use('/', homeRouter);
}
module.exports = route;