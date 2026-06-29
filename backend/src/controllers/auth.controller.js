const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const userRegister = async (req, res, next) => {
    try {
        const { username, email, password, role = "user" } = req.body;

        const findUser = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (findUser) {
            return res.status(409).json({
                message: "The username or email is already taken"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createUser = await userModel.create({
            username,
            email,
            password: hashPassword,
            role
        });

        req.user = createUser;
        req.statusCode = 201;
        req.successMessage = "User registered successfully";

        next();

    } catch (error) {
        console.error("ERROR || AUTH ROUTE || ", error);
        return res.status(500).json({
            status: "fail",
            message: "Error during registration"
        });
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide email and password"
            });
        }

        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid email"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid password"
            });
        }

        req.user = user;
        req.successMessage = "Logged in successfully";

        next();
    } catch (error) {
        console.error("ERROR || LOGIN ROUTE || ", error);
        return res.status(500).json({
            status: "fail",
            message: "Error during login: " + error.message
        });
    }
}

module.exports = { userRegister, loginUser };