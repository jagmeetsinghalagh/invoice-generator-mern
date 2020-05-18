const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../config');
const User = require('../Models/User');

exports.signupUser = (req,res,next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if(user){
                const error = new Error();
                error.message = "Email already exists.";
                throw error;
            }
            return bcrypt.hash(password,12);
        })
        .then(hashedPassword => {
            const user = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword
            });
            return user.save();
        })
        .then(user => {
            return res.json({
                user: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
        })
        .catch(err => console.log(err));
}

exports.loginUser = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if(!user){
                const error = new Error();
                error.message = 'No user with this email found';
                error.statusCode = 500;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password)
        })
        .then(doMatch => {
            if(!doMatch){
                const error = new Error();
                error.message = 'Password do not match';
                error.statusCode = 500;
                throw error;
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id
            }, config.JWT_SECRET);
            return res.json({
                userId: loadedUser._id,
                token: token
            });
        })
}