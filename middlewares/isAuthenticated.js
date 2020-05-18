const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');
    if(authHeader){
        const token = authHeader.split(' ')[1];
        let decodedToken;
        try{
            decodedToken = jwt.verify(token, config.JWT_SECRET);
        } catch(err){
            const error = new Error();
            error.message = 'No Authorized';
            error.statusCode = 401;
            throw error;
        }
        req.userId = decodedToken.userId;
        next();
    } else {
        const error = new Error();
        error.message = 'Not Authorized';
        error.statusCode = 401;
        throw error;
    }
}