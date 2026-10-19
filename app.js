
const session = require("express-session");
const flash = require("connect-flash");

const Menu = require("./models/Menu");

require("dotenv").config();
const connectDB = require("./config/db");

const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(session({
    secret: "foodfiesta",
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use((req, res, next) => {

    res.locals.user = req.session.user || null;

    next();

});

const homeRoutes=require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const menuRoutes = require("./routes/menuRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const contactRoutes=require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes=require("./routes/cartRoutes");



app.use("/",homeRoutes);
app.use("/", aboutRoutes);
app.use("/", menuRoutes);
app.use("/", reservationRoutes);
app.use("/",contactRoutes);
app.use("/", authRoutes);
app.use("/",cartRoutes);


connectDB();


app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));



app.get("/", async (req, res) => {

    const menuItems = await Menu.find();

    res.render("home", {
        title: "Home | Food Fiesta",
        activePage: "home",
        menuItems
    });

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});