
const authRouter = require('./auth');
const userRouter = require('./user');
const courseRouter = require('./course');
const topicRouter = require('./topic');
const inforRouter = require('./information');

function route(app) {
    app.use('/infor',inforRouter);
    app.use('/topic', topicRouter);
    app.use('/course', courseRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
}


module.exports = route;