const jwt = require('jsonwebtoken');

const validateIfAuthor = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            status: "Failed",
            message: "Unathorized"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        if (decoded.role !== 'author') return res.status(403).json({
            status: "False",
            message: "You are not a author"
        });
        req.user = decoded;
        // console.log("CONSOLE",decoded)

    } catch (error) {
        return res.status(401), json({
            status: "False",
            message: "Unathorized"
        })
    }

    next();
}

module.exports = { validateIfAuthor }