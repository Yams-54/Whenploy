const User = require('../models/userModel');
const bcrypt = require ('bcrypt');
const SALT_WORK_FACTOR = 10;
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
};

userController.Login = async (req, res, next) => {
    const {username, password} = req.body;
    const existingUser = await User.findOne({username: username},
        async (error, response) => {
            if (error) {
                return next(error)
            } else {
                //if username doesn't exist in DB
                if(!response) {
                    res.locals = {allowed:false}
                    return next()};
                console.log('response password', response)
                const allowed = await bcrypt.compare(password, response.password) //this returns a boolean
                if(allowed) {
                    console.log('allowed');
                    res.locals = {allowed: true};
                    return next();
                } 
                else {
                    res.locals = {allowed: false};
                    return next()
                }
        }
    });
}

module.exports = userController;