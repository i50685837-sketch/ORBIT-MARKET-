const router = require("express").Router();


// Temporary users (later MongoDB)

let users=[];


// REGISTER

router.post("/register",(req,res)=>{

const {email,password}=req.body;


users.push({
email,
password
});


res.json({

message:"Account created successfully"

});


});




// LOGIN

router.post("/login",(req,res)=>{


const {email,password}=req.body;


const user = users.find(

u => u.email===email && u.password===password

);



if(!user){

return res.status(401).json({

message:"Invalid email or password"

});

}



res.json({

message:"Login successful",

token:"orbit-demo-token"

});


});



module.exports=router;
