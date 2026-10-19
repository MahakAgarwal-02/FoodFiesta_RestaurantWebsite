const Menu=require("../models/Menu");

exports.home=async(req,res)=>{

const menuItems = await Menu.find({ isPopular: true }).limit(6);

res.render("home",{

title:"Home",

activePage:"home",

menuItems

});

};