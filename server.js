const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));


// Test server

app.get("/",(req,res)=>{
    res.send("Orbit Market API Running 🚀");
});


// Login/Register routes

app.use("/api/auth", authRoutes);



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{

console.log(`Server running on port ${PORT}`);

});
