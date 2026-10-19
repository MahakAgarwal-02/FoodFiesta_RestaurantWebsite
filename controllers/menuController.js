const Menu = require("../models/Menu");

exports.getMenu = async (req, res) => {

    try {

        const menuItems = await Menu.find();

        res.render("menu", {
            title: "Menu",
            activePage: "menu",
            menuItems
        });

    }

    catch (error) {

        console.log(error);

        res.status(500).send("Server Error");

    }

};