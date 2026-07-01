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

const checkAuth = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        console.error("ERROR || CHECK AUTH || ", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const logoutUser = (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
};

module.exports = { userRegister, loginUser, checkAuth, logoutUser };