const mongoose = require('mongoose');
const asyncHandler = require("express-async-handler");

const dbConnect = asyncHandler(async () =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://valiyorbekweb:WG7FZYpY0m5RTJo7@cluster0.jpgtmk3.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true})
        console.log("Database Connected Succesfully")
        conn()
    }catch(err){
        console.log("Database error");
    }
    
})



module.exports = dbConnect; 