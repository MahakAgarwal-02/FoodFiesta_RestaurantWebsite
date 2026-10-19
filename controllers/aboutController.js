exports.about = (req, res) => {

    res.render("about", {
        title: "About",
        activePage: "about"
    });

};