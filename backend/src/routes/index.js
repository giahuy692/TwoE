
const authRouter = require('./auth');
const userRouter = require('./user');
const courseRouter = require('./course');
const topicRouter = require('./topic');

function route(app) {
    app.use('/topic', topicRouter);
    app.use('/course', courseRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
}


module.exports = route;