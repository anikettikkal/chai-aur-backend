// require("dotenv").config({path:'./env'});

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from './db/index.js'; // use correct path and extension
import dotenv from 'dotenv';
dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Error connecting to MONGO_DB");
    
})

/*
import express from "express";
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        
    }
}) ()

*/