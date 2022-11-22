const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
    console.log('controller log') 
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
    }, (error, response) => {
        if(error) {
            return next(error)
        } else {
            res.locals = response;
            return next();
        }
    })
    // .then((user) => {
    //     console.log('hello user');
    //     res.locals.user = user;
    //     return next();
    // })
    // .catch((err) => {
    //     console.log('body', req.body);
    //     return next({

    //         log: 'Error at userController.createUser',
    //         message: {err: 'Invalid username and password'},
    //     });
    // });
};

module.exports = userController;