const User = require('../models/userModel');

const userController = {};

userController.createUser = (req, res, next) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((user) => {
        res.locals.user = user;
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Error at userController.createUser',
            message: {err: 'Invalid username and password'},
        });
    });
};

module.exports = userController