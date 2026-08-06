const router = require("express").Router();

let users = [];


router.post("/register", (req, res)=>{

const { email, password } = req.body;


if(!email || !password){

return res.status(400).json({

message:"Email and password required"

});

}


// save user (temporary)

users.push({

email,
password

});


res.status(201).json({

message:"Account created successfully"

});


});


module.exports = router;
