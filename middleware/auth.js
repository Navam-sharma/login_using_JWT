const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token == null) {
        req.user = null;
        next();
    } else {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                req.user = null;
            } else {
                req.user = user;
            }
            next();
        });
    }
};

module.exports = authenticateToken;
