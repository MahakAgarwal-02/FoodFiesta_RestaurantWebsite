const mongoose = require("mongoose");
const Menu = require("./models/Menu");

mongoose.connect("mongodb://127.0.0.1:27017/foodfiesta");

const menuItems = [

{
name:"Margherita Pizza",
description:"Classic pizza with mozzarella cheese and fresh basil.",
price:299,
category:"Pizza",
image:"/images/menu/MargheritaPizza.jpg",
rating:5,
isPopular:true
},

{
name:"Farmhouse Pizza",
description:"Loaded with fresh vegetables and mozzarella cheese.",
price:399,
category:"Pizza",
image:"/images/menu/farmousePizza.jpg",
rating:5,

},

{
name:"Veg Supreme Pizza",
description:"A delicious combination of veggies and cheese.",
price:449,
category:"Pizza",
image:"/images/menu/VegSupreme.jpg",
rating:5
},

{
name:"Cheese Burst Pizza",
description:"Extra cheesy pizza with a molten cheese center.",
price:499,
category:"Pizza",
image:"/images/menu/cheeseBurst.jpg",
rating:5
},

{
name:"Classic Burger",
description:"Veg patty with fresh lettuce and cheese.",
price:179,
category:"Burger",
image:"/images/menu/classicBurger.jpg",
rating:5
},

{
name:"Cheese Burger",
description:"Burger filled with melted cheese and crispy veggies.",
price:199,
category:"Burger",
image:"/images/menu/cheeseBurger.jpg",
rating:5
},

{
name:"Chicken Burger",
description:"Juicy chicken patty with fresh vegetables.",
price:249,
category:"Burger",
image:"/images/menu/chickenBurger.jpg",
rating:5,
isPopular:true
},

{
name:"Double Patty Burger",
description:"Double patty burger for extra hunger.",
price:299,
category:"Burger",
image:"/images/menu/doublePatty.jpg",
rating:5
},

{
name:"Alfredo Pasta",
description:"Creamy Alfredo pasta with herbs.",
price:299,
category:"Pasta",
image:"/images/menu/alfredoPasta.jpg",
rating:5
},

{
name:"White Sauce Pasta",
description:"Creamy white sauce pasta with vegetables.",
price:279,
category:"Pasta",
image:"/images/menu/whiteSauce.jpg",
rating:5,
isPopular:true
},

{
name:"Red Sauce Pasta",
description:"Pasta tossed in spicy tomato sauce.",
price:269,
category:"Pasta",
image:"/images/menu/redSauce.jpg",
rating:5
},

{
name:"Veg Biryani",
description:"Traditional aromatic vegetable biryani.",
price:249,
category:"Biryani",
image:"/images/menu/vegBiryani.jpg",
rating:5
},

{
name:"Chicken Biryani",
description:"Authentic chicken dum biryani.",
price:349,
category:"Biryani",
image:"/images/menu/chickenBiryani.jpg",
rating:5

},

{
name:"Hyderabadi Biryani",
description:"Rich Hyderabadi style biryani.",
price:379,
category:"Biryani",
image:"/images/menu/hyderabadiBiryani.jpg",
rating:5,
isPopular:true
},

{
name:"Fried Rice",
description:"Wok-tossed fried rice with fresh vegetables and flavorful sauces.",
price:229,
category:"Biryani",
image:"/images/menu/friedRice.jpg",
rating:5
},

{
name:"Spring Roll",
description:"Crispy vegetable spring rolls.",
price:199,
category:"Starters",
image:"/images/menu/springroll.jpg",
rating:5
},

{
name:"Crispy Mushroom",
description:"Deep fried crispy mushrooms.",
price:229,
category:"Starters",
image:"/images/menu/Mushroom.jpg",
rating:5,
isPopular:true
},

{
name:"Cold Coffee",
description:"Refreshing chilled coffee.",
price:149,
category:"Beverages",
image:"/images/menu/coldCoffe.jpg",
rating:5
},

{
name:"Hot Coffee",
description:"Freshly brewed hot coffee.",
price:129,
category:"Beverages",
image:"/images/menu/hotCoffe.jpg",
rating:5
},

{
name:"Chocolate Cake",
description:"Rich chocolate layered cake.",
price:199,
category:"Desserts",
image:"/images/menu/chocolateCake.jpg",
rating:5
},

{
name:"Choco Lava Cake",
description:"Warm lava cake with chocolate filling.",
price:179,
category:"Desserts",
image:"/images/menu/chocoLava.jpg",
rating:5,
isPopular:true
},

{
name:"Fruit Cake",
description:"Soft cake topped with fresh fruits.",
price:189,
category:"Desserts",
image:"/images/menu/fruitCake.jpg",
rating:5
},

{
name:"Pineapple Cake",
description:"Fresh pineapple cream cake.",
price:189,
category:"Desserts",
image:"/images/menu/PineAppleCake.jpg",
rating:5
}

];

async function seedDatabase(){

try{

await Menu.deleteMany();

await Menu.insertMany(menuItems);

console.log("✅ Menu Seeded Successfully");

mongoose.connection.close();

}

catch(error){

console.log(error);

}

}

seedDatabase();