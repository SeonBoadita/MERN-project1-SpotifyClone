const jwt = require('jsonwebtoken');

const verifyUserLogin = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_TOKEN
        );

        req.user = decoded;

        next();

    } catch (error) {
        console.error(
            'ERROR || VERIFY USER LOGIN MIDDLEWARE ||',
            error.message
        );

        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};

module.exports = { verifyUserLogin };