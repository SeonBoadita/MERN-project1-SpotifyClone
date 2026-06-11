const jwt = require('jsonwebtoken');

const createToken = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(500).json({
                status: "fail",
                message: "User data not found for token generation"
            });
        }

        const token = jwt.sign({
            "_id": user._id,
            "role": user.role
        }, process.env.JWT_TOKEN);

        res.cookie("token", token, {
            httpOnly: true, // Security best practice
            secure: process.env.JWT_TOKEN,
        });

        res.status(req.statusCode || 200).json({
            status: "success",
            message: req.successMessage || "Operation successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("ERROR || AUTH MIDDLEWARE || ", error);
        return res.status(500).json({
            status: "fail",
            message: "Internal server error during token generation"
        });
    }
}

module.exports = { createToken };