
const authRouter = require('./auth');
const userRouter = require('./user');
const courseRouter = require('./course')

function route(app) {
    app.use('/course', courseRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
}


module.exports = route;