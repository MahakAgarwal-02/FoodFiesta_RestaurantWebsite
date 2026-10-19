const Contact = require("../models/Contact");

// Contact Page
exports.getContact=(req,res)=>{

    res.render("contact",{

        title:"Contact",

        activePage:"contact"

    });

};


// Save Message
exports.sendMessage=async(req,res)=>{

try{

    const contact=new Contact(req.body);

    await contact.save();

    return res.json({

        success:true,

        message:"Message Sent Successfully!"

    });

}

catch(err){

    console.log(err);

    return res.status(500).json({

        success:false,

        message:"Something went wrong."

    });

}

};