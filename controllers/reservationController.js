const Reservation = require("../models/Reservation");

// Show Reservation Page
exports.getReservation = (req, res) => {

    res.render("reservation", {
        title: "Reservation",
        activePage: "reservation",
        
    });

};


// Save Reservation
exports.bookTable = async (req, res) => {

    try {

        const { name, email, phone, guests, date, time, specialRequest } = req.body;

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {

            return res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit phone number."
            });

        }

        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {

            return res.status(400).json({
                success: false,
                message: "Please enter a valid email."
            });

        }

        const reservation = new Reservation({
            name,
            email,
            phone,
            guests,
            date,
            time,
            specialRequest
        });

        await reservation.save();

        return res.json({
            success: true,
            message: "🎉 Table Reserved Successfully!"
        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });

    }

};