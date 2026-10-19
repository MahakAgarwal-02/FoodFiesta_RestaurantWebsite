const User = require("../models/User");
const bcrypt = require("bcrypt");

// Login Page
exports.getLogin = (req, res) => {
    res.render("login", {
        title: "Login",
        activePage: "login"
    });
};

// Signup Page
exports.getSignup = (req, res) => {
    res.render("signup", {
        title: "Signup",
        activePage: "signup"
    });
};

// ================= SIGNUP =================

exports.signup = async (req, res) => {

    try {

        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {

            return res.json({
                success: false,
                message: "Passwords do not match."
            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.json({
                success: false,
                message: "Email already registered."
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        return res.json({
            success: true,
            message: "Account created successfully!"
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });

    }

};

// ================= LOGIN =================

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.json({
                success: false,
                message: "User not found."
            });

        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.json({
                success: false,
                message: "Incorrect password."
            });

        }

        req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        return res.json({
            success: true,
            message: "Login Successful!"
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });

    }

};

// ================= LOGOUT =================

exports.logout = (req, res) => {

    req.session.destroy(() => {

        res.redirect("/");

    });

};