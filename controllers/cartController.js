exports.getCart = (req, res) => {

    res.render("cart", {

        title: "Cart",

        activePage: "cart"

    });

};